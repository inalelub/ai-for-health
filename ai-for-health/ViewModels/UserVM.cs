using System.ComponentModel.DataAnnotations;

namespace MicroHack_API.ViewModels
{
    public class UserVM
    {
        [Required(ErrorMessage = "Email address is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Emailaddress { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        public string Password { get; set; }

    }
}
