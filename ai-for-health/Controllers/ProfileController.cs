using ai_for_health.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using ai_for_health.Models;
using System.IdentityModel.Tokens.Jwt;

namespace ai_for_health.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ILogger<ProfileController> _logger;

        public ProfileController(UserManager<AppUser> userManager, ILogger<ProfileController> logger)
        {
            _userManager = userManager;
            _logger = logger;
        }

        [HttpGet]
        [Route("GetProfile")]
        public async Task<IActionResult> GetProfile()
        {
            var claimsList = User.Claims.Select(c => new { c.Type, c.Value }).ToList();
            _logger.LogInformation("All claims: {Claims}", System.Text.Json.JsonSerializer.Serialize(claimsList));

            var userId = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value ??
             User.FindFirst(ClaimTypes.NameIdentifier)?.Value;


            if (string.IsNullOrEmpty(userId) || !Guid.TryParse(userId, out _))
            {
                _logger.LogWarning("Invalid or missing NameIdentifier claim: {userId}", userId);
                return Unauthorized("Invalid token: User ID is not a GUID.");
            }


            _logger.LogInformation("Looking for user with Id: {UserId}", userId);
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                _logger.LogWarning("User not found for Id: {UserId}. Trying email lookup.", userId);
                var email = User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
                if (!string.IsNullOrEmpty(email))
                {
                    user = await _userManager.FindByEmailAsync(email.ToLowerInvariant());
                    if (user == null)
                    {
                        _logger.LogWarning("User not found for Email: {Email}", email);
                        return NotFound("User not found.");
                    }
                }
                else
                {
                    return NotFound("User not found.");
                }
            }

            var profile = new UserProfileVM
            {
                FirstName = user.firstName,
                Email = user.Email,
                IsDarkModeEnabled = user.IsDarkModeEnabled,
                CommunicationPreference = user.CommunicationPreference
            };

            _logger.LogInformation("Profile retrieved for user: {Email}", user.Email);
            return Ok(profile);
        }

        [HttpPut]
        [Route("UpdateProfile")]
        public async Task<IActionResult> UpdateProfile([FromBody] UserProfileVM updatedProfile)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values
                    .SelectMany(v => v.Errors)
                    .Select(e => e.ErrorMessage)
                    .ToList();
                return BadRequest(new { Errors = errors });
            }

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                _logger.LogWarning("User not found for profile update.");
                return NotFound("User not found.");
            }

            // Update profile fields
            user.firstName = updatedProfile.FirstName;
            user.Email = updatedProfile.Email;
            user.UserName = updatedProfile.Email; // Sync username with email
            user.IsDarkModeEnabled = updatedProfile.IsDarkModeEnabled;
            user.CommunicationPreference = updatedProfile.CommunicationPreference;

            var updateResult = await _userManager.UpdateAsync(user);
            if (!updateResult.Succeeded)
            {
                _logger.LogError("Failed to update profile for user {UserName}. Errors: {Errors}", user.UserName, string.Join(", ", updateResult.Errors.Select(e => e.Description)));
                return BadRequest(new { Errors = updateResult.Errors.Select(e => e.Description) });
            }

            // Update password if provided
            if (!string.IsNullOrWhiteSpace(updatedProfile.CurrentPassword) && !string.IsNullOrWhiteSpace(updatedProfile.NewPassword))
            {
                var passwordResult = await _userManager.ChangePasswordAsync(user, updatedProfile.CurrentPassword, updatedProfile.NewPassword);
                if (!passwordResult.Succeeded)
                {
                    _logger.LogError("Failed to update password for user {UserName}. Errors: {Errors}", user.UserName, string.Join(", ", passwordResult.Errors.Select(e => e.Description)));
                    return BadRequest(new { Errors = passwordResult.Errors.Select(e => e.Description) });
                }
            }

            _logger.LogInformation("Profile updated successfully for user {UserName}.", user.UserName);
            return Ok("Profile updated successfully.");
        }
    }
}