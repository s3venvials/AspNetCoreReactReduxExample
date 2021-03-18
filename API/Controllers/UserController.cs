using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [Route("~/api/user/register")]
        [HttpPost]
        public ActionResult PostRegister([FromBody]Users user)
        {

            if (!ModelState.IsValid)
               return BadRequest();

                var newUser = new Users()
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    UserName = user.UserName,
                    Password = user.Password
                };

                _context.Users.Add(newUser);
                _context.SaveChanges();
            
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