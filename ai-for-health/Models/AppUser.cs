using Microsoft.AspNetCore.Identity;

namespace ai_for_health.Models
{
    public class AppUser : IdentityUser
    {
        public string firstName { get; set; }
        public bool IsDarkModeEnabled { get; set; } = false;
        public string CommunicationPreference { get; set; } = "Email";
    }
}
