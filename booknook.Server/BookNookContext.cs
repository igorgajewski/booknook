using booknook.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace booknook.Server;

public class BookNookContext : DbContext
{
    public BookNookContext(DbContextOptions<BookNookContext> options) : base(options)
    {
        
    }
    public DbSet<User> Users { get; set; }
}
