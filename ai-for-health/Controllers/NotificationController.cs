using ai_for_health.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ai_for_health.Controllers
{
    [ApiController]
    [Route("api/notifications")]
    public class NotificationController : Controller
    {
        private readonly ApplicationDbContext _db;

        public NotificationController(ApplicationDbContext context)
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
