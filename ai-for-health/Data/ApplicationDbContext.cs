using ai_for_health.Model;
using Microsoft.EntityFrameworkCore;

namespace ai_for_health.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> option) : base(option)
    {
        
    }

    public DbSet<Notification> Notifications { get; set; }
    public DbSet<DiagnosticTest> DiagnosticTests { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Notification>().HasData(new Notification
        {
            Id = 1,
            Timestamp = new TimeOnly(9, 0),
            Title = "Updated Account",
            Status = "Unread"

        });

        modelBuilder.Entity<DiagnosticTest>().HasData(new DiagnosticTest
        {
            Id = 1,
            Name = "Gel All Trail",
            Result = "Normal",
            Date = new DateOnly(2025, 07, 29)

        });
    }
}