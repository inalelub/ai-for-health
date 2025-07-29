using ai_for_health.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
namespace ai_for_health.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class HealthCheckController : Controller
    {
        private readonly AppDbContext _context;

        public HealthCheckController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetHealthChecks()
        {
            var health = await _context.Patients.ToListAsync();

           return Ok(health);
        }
    }
}
