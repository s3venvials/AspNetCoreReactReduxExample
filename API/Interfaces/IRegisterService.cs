using API.Entities;

namespace API.Interfaces
{
    public interface IRegisterService
    {
        int CreateUserProfile(Users user);
    }
}