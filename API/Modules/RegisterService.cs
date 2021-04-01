using System.Linq;
using API.Data;
using API.Entities;
using API.Interfaces;
using API.Models;

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

        public int CreateUserProfile(Users user)
        {
            var salt = BCrypt.Net.BCrypt.GenerateSalt(10);
            var hash = BCrypt.Net.BCrypt.HashPassword(user.Hash, salt);
            var userExist = _context.Users.Where(u => u.UserName == user.UserName).ToList();
        
            if (userExist.Count > 0)
                return 0;

            var newUser = new Users()
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                Hash = hash,
                Salt = salt
            };

            _context.Users.Add(newUser);
            return _context.SaveChanges();
        }
    }
}