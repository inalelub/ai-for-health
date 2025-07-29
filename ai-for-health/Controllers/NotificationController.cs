using ai_for_health.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ai_for_health.Controllers
{
    [ApiController]
    [Route("api/notifications")]
    [Authorize]
    public class NotificationController : Controller
    {
        private readonly AppDbContext _db;

        public NotificationController(AppDbContext context)
        {
            _db = context;
        }

        [HttpGet("/")]
        public async Task<IResult> GetAll()
        {
            return TypedResults.Ok(await _db.Notifications.ToListAsync());
        }

        [HttpGet("/{id}")]
        public async Task<IResult> GetById(int id)
        {
            var obj = await _db.Notifications.FindAsync(id);

            if (obj is null)
            {
                return TypedResults.NotFound();
            }

            return TypedResults.Ok(obj);
        }
    }
}
