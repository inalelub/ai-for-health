using Microsoft.AspNetCore.Identity;

namespace MicroHack_API.Models
{
    public class AppUser : IdentityUser
    {
        public string firstName { get; set; }
        public bool IsDarkModeEnabled { get; set; } = false;
        public string CommunicationPreference { get; set; } = "Email";
    }
}
