using ai_for_health.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ai_for_health.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

namespace ai_for_health.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IUserClaimsPrincipalFactory<AppUser> _claimsPrincipalFactory;
        private readonly IConfiguration _configuration;

        private readonly IAuthenticationService _authenticationService;
        private readonly ILogger<LoginController> _logger;

        public LoginController(UserManager<AppUser> userManager, IUserClaimsPrincipalFactory<AppUser> claimsPrincipalFactory, IConfiguration configuration, ILogger<LoginController> logger, IAuthenticationService authenticationService)
        {
            _userManager = userManager;
            _claimsPrincipalFactory = claimsPrincipalFactory;
            _logger = logger;
            _authenticationService = authenticationService;
            _configuration = configuration;
        }


        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(RegisterVM uvm)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values
                    .SelectMany(v => v.Errors)
                    .Select(e => e.ErrorMessage)
                    .ToList();
                return BadRequest(new { Errors = errors });
            }

            var registerUser = await _userManager.FindByEmailAsync(uvm.Emailaddress);
            if (registerUser != null)
            {
                return Forbid("Account already exists.");
            }

            registerUser = new AppUser
            {
                Id = Guid.NewGuid().ToString(),
                firstName = uvm.FirstName,
                UserName = uvm.Emailaddress,
                Email = uvm.Emailaddress,
            };

            var result = await _userManager.CreateAsync(registerUser, uvm.Password);
            if (!result.Succeeded)
            {
                var identityErrors = result.Errors.Select(e => e.Description).ToList();
                return StatusCode(StatusCodes.Status500InternalServerError, new { Errors = identityErrors });
            }

            return Ok("Registration successful.");
        }

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult> Login(UserVM uvm)
        {
            if (string.IsNullOrWhiteSpace(uvm.Emailaddress) || string.IsNullOrWhiteSpace(uvm.Password))
            {
                return BadRequest("Email and password are required.");
            }

            var loginUser = await _userManager.FindByNameAsync(uvm.Emailaddress);

            if (loginUser == null)
            {
                return NotFound("User not found.");
            }

            var passwordValid = await _userManager.CheckPasswordAsync(loginUser, uvm.Password);

            if (!passwordValid)
            {
                return Unauthorized("Invalid password.");
            }

            try
            {
                return GenerateJWTToken(loginUser);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating token.");
                return StatusCode(StatusCodes.Status500InternalServerError, "Token generation failed.");
            }
        }

        private ActionResult GenerateJWTToken(AppUser user)
        {
            try
            {
                var keyBytes = Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]);
                _logger.LogInformation($"Key length: {keyBytes.Length} bytes");

                if (keyBytes.Length < 16)
                {
                    _logger.LogError("JWT key is too short. Must be at least 16 bytes for HmacSha256.");
                    return StatusCode(StatusCodes.Status500InternalServerError, "Invalid JWT key configuration.");
                }

                var claims = new List<Claim>
{
    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
    new Claim(JwtRegisteredClaimNames.Sub, user.Id), // This becomes the "sub" claim and can be parsed explicitly
    new Claim(ClaimTypes.Name, user.UserName),
    new Claim(ClaimTypes.Email, user.Email)
};



                var key = new SymmetricSecurityKey(keyBytes);
                var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    _configuration["Tokens:Issuer"],
                    _configuration["Tokens:Audience"],
                    claims,
                    signingCredentials: credentials,
                    expires: DateTime.UtcNow.AddHours(3)
                );

                return Created("", new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    user = user.UserName
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating JWT token for user {UserName}.", user.UserName);
                return StatusCode(StatusCodes.Status500InternalServerError, $"Token generation failed: {ex.Message}");
            }
        }
    }


}
