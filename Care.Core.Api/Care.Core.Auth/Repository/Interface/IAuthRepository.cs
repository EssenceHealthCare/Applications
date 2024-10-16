using Care.Core.Auth.Dtos;

namespace Care.Core.Auth.Repository.Interface
{
    public interface IAuthRepository
    {
        Task<ResponseDto> Register(RegistrationRequestDto registerDto);
        Task<ResponseDto> Login(LoginRequestDto loginDto);
        Task<IList<string>> AssignRole(string email, List<string> roles);
    }
}
