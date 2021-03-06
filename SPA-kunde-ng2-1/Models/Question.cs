﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;


namespace SPA_kunde_ng2.Models
{
    public class Question
    {
        [Key]
        public int id { get; set; }
        public string body { get; set; }
        public string email { get; set; }

        public virtual Answer answer { get; set; }
    }
}