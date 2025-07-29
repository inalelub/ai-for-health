using System.ComponentModel.DataAnnotations;

namespace MicroHack_API.ViewModels
{
    public class UserProfileVM
    {
        [Required(ErrorMessage = "First name is required.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; }

        public bool IsDarkModeEnabled { get; set; }

        [RegularExpression("Email|SMS|None", ErrorMessage = "Communication preference must be 'Email', 'SMS', or 'None'.")]
        public string CommunicationPreference { get; set; }

        [DataType(DataType.Password)]
        public string CurrentPassword { get; set; } 

        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage = "New password must be at least 8 characters long.")]
        public string NewPassword { get; set; }
    }
}
