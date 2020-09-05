using System.Diagnostics;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    // Inheriting DbContext to allow for data queries from and into a database.
    public class DataContext : DbContext
    {
        // Chain constructor to base constructor (superclass constructor) and pass in parameters there as well.
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }

        private string GetDebuggerDisplay()
        {
            return ToString();
        }
    }
}