using ai_for_health.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ai_for_health.Controllers;

[Route("api/health-check")]
[ApiController]
public class DatabaseController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    public DatabaseController(ApplicationDbContext context)
    {
        _db = context;
    }

    [HttpGet("")]
    public async Task<IResult> HealthCheck()
    {
        var connection = await _db.Database.CanConnectAsync();

        if (connection)
        {
            return TypedResults.Ok("A database connection was established");
        }

        return TypedResults.NotFound("There is no database connectivity");
    }
}