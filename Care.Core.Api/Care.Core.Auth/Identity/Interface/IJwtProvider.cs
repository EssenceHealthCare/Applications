using Care.Core.Auth.Models;

namespace Care.Core.Auth.Identity.Interface
{
    public interface IJwtProvider
    {
        string GenerateJwtToken(ApplicationUser user, IList<string> roles);
    }
}
