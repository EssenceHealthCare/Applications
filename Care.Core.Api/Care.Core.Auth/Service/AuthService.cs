﻿using Care.Core.Auth.Dtos;
using Care.Core.Auth.Repository.Interface;
using Care.Core.Auth.Service.Interface;

namespace Care.Core.Auth.Service
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _authRepository;

        public AuthService(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        public async Task<IList<string>> AssignRole(string email, List<string> roles)
        {
            return await _authRepository.AssignRole(email, roles);
        }

        public async Task<ResponseDto> Register(RegistrationRequestDto registerDto)
        {
            return await _authRepository.Register(registerDto);
        }

        public async Task<UserDto> Login(LoginRequestDto loginRequestDto)
        {
            return await _authRepository.Login(loginRequestDto);
        }

    }
}
