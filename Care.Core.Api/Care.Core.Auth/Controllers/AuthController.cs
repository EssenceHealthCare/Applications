﻿using Care.Core.Auth.Dtos;
using Care.Core.Auth.Service.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Care.Core.Auth.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        
        [HttpPost("register")]
        public async Task<ResponseDto> Register(RegistrationRequestDto registerDto)
        {
            return await _authService.Register(registerDto);
        }

        [HttpPost("login")]
        public async Task<UserDto> Login(LoginRequestDto loginDto)
        {
            return await _authService.Login(loginDto);
        }

        [HttpPost("assign-role")]
        public async Task<IList<string>> AssignRole(string email, List<string> roles)
        {
            return await _authService.AssignRole(email, roles);
        }
    }
}
