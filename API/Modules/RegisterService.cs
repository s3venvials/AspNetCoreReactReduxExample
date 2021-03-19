using API.Data;
using API.Entities;
using API.Interfaces;

namespace API.Modules
{
    public class RegisterService : IRegisterService
    {
        private readonly DataContext _context;
        private readonly IUtilities _utilities;

        public RegisterService(DataContext context, IUtilities utilities)
        {
            _context = context;
            _utilities = utilities;
        }

        public void CreateUserProfile(Users user)
        {
            var salt = _utilities.GenerateSalt();
            var hashPassword = _utilities.GenerateHash(user.Password, salt, 10, 20);
            var newUser = new Users()
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                Password = hashPassword,
                Salt = salt
            };

            _context.Users.Add(newUser);
            _context.SaveChanges();
        }
    }
}