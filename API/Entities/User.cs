namespace API.Entities
{
    public class Users
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string UserName { get; set; }

        public string Hash { get; set; }

        public string Salt { get; set; }
    }
}