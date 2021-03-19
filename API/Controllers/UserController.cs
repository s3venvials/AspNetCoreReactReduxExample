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

        public UserController(DataContext context, IRegisterService registerService)
        {
            _context = context;
            _registerService = registerService;
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
        public ActionResult PostLogin([FromBody] Users user)
        {
            var users = _context.Users;

            var foundUser = users.Where(u => u.UserName == user.UserName).ToList();

            if (foundUser[0].UserName == user.UserName && foundUser[0].Password == user.Password) {
                return Ok(foundUser);
            } else {
                return Unauthorized();
            }
        }
    }
}