using API.Entities;

namespace API.Interfaces
{
    public interface IRegisterService
    {
        void CreateUserProfile(Users user);
    }
}