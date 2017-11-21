using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
    public class QADBContext : DbContext
    {
        public QADBContext() : base("name=QADB")
        {
            Database.SetInitializer<QADBContext>(new QADBInitialize());
        }

        // konstruktøren under brukes kun under test!
        public QADBContext(DbConnection connection)
                : base(connection, true)
        {
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<CustomerQuestion> CustomerQuestions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        /*
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
        */
    }
}