using API.Entities;

namespace API.Interfaces
{
    public interface ILoginService
    {
        bool LoginUser(Users user);
    }
}