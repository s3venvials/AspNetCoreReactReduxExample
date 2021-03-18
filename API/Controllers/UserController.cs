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
        public ActionResult PostRegister([FromBody]RegisterUser user)
        {

            if (!ModelState.IsValid)
               return BadRequest();

            try
            {
                var newUser = new RegisterUser()
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    UserName = user.UserName,
                    Password = user.Password
                };

                _context.RegisterUsers.Add(newUser);
                _context.SaveChanges();
            }
            catch (System.Exception)
            {
                
                return BadRequest();
            }
            

            return Ok();
        }
    }
}