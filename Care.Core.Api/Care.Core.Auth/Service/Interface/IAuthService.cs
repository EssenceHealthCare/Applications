using Care.Core.Auth.Dtos;

namespace Care.Core.Auth.Service.Interface
{
    public interface IAuthService
    {
        Task<ResponseDto> Register(RegistrationRequestDto registerDto);
        Task<UserDto> Login(LoginRequestDto loginDto);
        Task<IList<string>> AssignRole(string email, List<string> roles);
    }
}
