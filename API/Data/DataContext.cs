using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employees> Employees { get; set; }

        public DbSet<WeatherForecast> WeatherForecasts { get; set; }

        public DbSet<Users> Users { get; set; }
    }
}