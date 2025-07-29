using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ai_for_health.Models;

namespace ai_for_health.Data;

public class AppDbContext : IdentityDbContext<AppUser>
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<HealthCheck> Patients { get; set; }
        
    public DbSet<AppUser> Users { get; set; }
    //sedd values to test
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<HealthCheck>().HasData(
            new HealthCheck { ID = 1, Name = "John", Surname = "Doe" },
            new HealthCheck { ID = 2, Name = "Jane", Surname = "Smith"}
        );
    }
}