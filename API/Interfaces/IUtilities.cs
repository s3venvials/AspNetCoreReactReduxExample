namespace API.Interfaces
{
    public interface IUtilities
    {
        byte[] GenerateHash(byte[] password, byte[] salt, int iterations, int length);
        byte[] GenerateSalt(int length = 20);
    }
}