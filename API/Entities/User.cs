namespace API.Entities
{
    public class Users
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string UserName { get; set; }

        public byte[] Hash { get; set; }

        public byte[] Salt { get; set; }
    }
}