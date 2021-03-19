using API.Data;
using API.Entities;
using API.Interfaces;

namespace API.Modules
{
    public class RegisterService : IRegisterService
    {
        private readonly DataContext _context;

        public RegisterService(DataContext context)
        {
            _context = context;
        }

        public void CreateUserProfile(Users user)
        {
            var newUser = new Users()
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                Password = user.Password
            };

            _context.Users.Add(newUser);
            _context.SaveChanges();
        }
    }
}