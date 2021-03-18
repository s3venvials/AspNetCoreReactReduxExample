using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

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

        // [Route("~/api/user/login")]
        // [HttpPost]
        // public ActionResult PostLogin([FromBody]string userName, string password)
        // {
        //     if (!ModelState.IsValid)
        //        return BadRequest();

        //     //var users = _context.Users;
            
        
        //     return Ok();
        // }
    }
}