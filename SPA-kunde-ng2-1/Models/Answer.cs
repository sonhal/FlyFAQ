using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace SPA_kunde_ng2.Models
{
    public class Answer
    {
        [Key]
        public int id { get; set; }
        public string body { get; set; }



    }
}