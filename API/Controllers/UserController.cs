using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using API.Interfaces;
using System.Collections.Generic;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IRegisterService _registerService;
        private readonly ILoginService _loginService;

        public UserController(DataContext context, IRegisterService registerService, ILoginService loginService)
        {
            _context = context;
            _registerService = registerService;
            _loginService = loginService;
        }

        [Route("~/api/user/register")]
        [HttpPost]
        public ActionResult<ResponseModel> PostRegister([FromBody]Users user)
        {
            var registerServiceResponse = _registerService.CreateUserProfile(user);

            if (registerServiceResponse == 1)
            {
                return Ok(new ResponseModel() { Message="User successfully registered!", Status = 202 });
            }
            else
            {
                return Ok(new ResponseModel() { Message="Issue processing your request, please try again.", Status = 400 });
            }
        }

        [Route("~/api/user/login")]
        [HttpPost]
        public ActionResult<ResponseModel> PostLogin([FromBody]Users user)
        {
            if (_loginService.LoginUser(user)) 
            {
                return Ok(new ResponseModel() { Message = "Successfully signed in!", Status = 202 });
            }
            else
            {
                return Ok(new ResponseModel() { Message = "401 Unauthorized", Status = 401 });
            } 
        }
    }
}