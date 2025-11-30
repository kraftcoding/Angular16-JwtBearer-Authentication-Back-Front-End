
namespace LibreraSearch.WebAPI.Models;

public partial class Login
{
    public int id { get; set; } 

    public string Email { get; set; }

    public string Password { get; set; }

    public string? Role { get; set; }   
}
