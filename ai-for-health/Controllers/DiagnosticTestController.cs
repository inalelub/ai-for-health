using ai_for_health.Data;
using ai_for_health.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ai_for_health.Controllers;

[Route("api/diagnostic-tests")]
[ApiController]
public class DiagnosticTestController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    public DiagnosticTestController(ApplicationDbContext context)
    {
        _db = context;
    }

    [HttpPost("/create")]
    public async Task<IResult> Create(DiagnosticTest oTest)
    {
        _db.DiagnosticTests.Add(oTest);
        await _db.SaveChangesAsync();

        return TypedResults.Created($"/create/{oTest.Id}", oTest);
    }

    [HttpGet("/all/{id}")]
    public async Task<IResult> GetById(int id)
    {
        var diagnosticObj = await _db.DiagnosticTests.FindAsync(id);

        if (diagnosticObj is null)
        {
            return TypedResults.NotFound($"No diagnostic object of id {id} exist");
        }

        return TypedResults.Ok(diagnosticObj);
    }

    [HttpGet("/all")]
    public async Task<IResult> GetAll()
    {
        var diagnosticObj = await _db.DiagnosticTests.ToListAsync();

        return TypedResults.Ok(diagnosticObj);
    }

    [HttpPut("/update/{id}")]
    public async Task<IResult> Update([FromBody] DiagnosticTest value, int id)
    {
        var item = await _db.DiagnosticTests.FindAsync(id);

        if (item != null)
        {
            item.Name = value.Name;
            item.Date = value.Date;
            item.Result = value.Result;

            await _db.SaveChangesAsync();

            return TypedResults.NoContent();
        }

        return TypedResults.NotFound();
    }

    [HttpDelete("/delete/{id}")]
    public async Task<IResult> DeleTask(int id)
    {
        var item = await _db.DiagnosticTests.FindAsync(id);

        if (item == null)
        {
            return TypedResults.NotFound();
        }

        _db.DiagnosticTests.Remove(item);
        await _db.SaveChangesAsync();
        return TypedResults.NoContent();
    }
}