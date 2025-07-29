using ai_for_health.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ai_for_health.Data;


public class AppDbContext : IdentityDbContext<AppUser>
{
    public AppDbContext(DbContextOptions<AppDbContext> option) : base(option)
    {

    }
    public DbSet<HealthCheck> Patients { get; set; }

    public DbSet<AppUser> Users { get; set; }
    public DbSet<Notification> Notifications { get; set; }
    public DbSet<DiagnosticTest> DiagnosticTests { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<HealthCheck>().HasData(
            new HealthCheck { ID = 1, Name = "John", Surname = "Doe" },
            new HealthCheck { ID = 2, Name = "Jane", Surname = "Smith" }
        );

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