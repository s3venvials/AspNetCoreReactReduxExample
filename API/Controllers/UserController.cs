using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using API.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
        public ActionResult PostRegister([FromBody]Users user)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            _registerService.CreateUserProfile(user);
            
            return Ok();
        }

        [Route("~/api/user/login")]
        [HttpPost]
        public ActionResult PostLogin([FromBody]Users user)
        {
            if (_loginService.LoginUser(user))
            {
                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}