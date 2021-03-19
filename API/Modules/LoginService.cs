using System.Linq;
using API.Data;
using API.Entities;
using API.Interfaces;

namespace API.Modules
{
    public class LoginService : ILoginService
    {
        private readonly DataContext _context;
        private readonly IUtilities _utilities;

        public LoginService(DataContext context, IUtilities utilities)
        {
            _context = context;
            _utilities = utilities;
        }

        public bool LoginUser(Users user)
        {
            bool result = false;
            var users = _context.Users;
            var foundUser = users.Where(u => u.UserName == user.UserName).ToList();
            var compareHash = _utilities.GenerateHash(user.Hash, foundUser[0].Salt, 10, 20);

            if (foundUser[0].Hash == compareHash)
            {
                result = true;
            }

            return result;
        }
    }
}