using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.DataAccessLayer
{
    public class Database : DbContext
    {
        //Constructor
        public Database(DbContextOptions options) : base(options)
        {
        }

        //Tables
        public DbSet<Person> People { get; set; }
    }
}
