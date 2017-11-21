using System;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
    public class ViewModelQuestion
    {
        public int id { get; set; }

        [Required]
        [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{2,30}$")]
        public string body { get; set; }

        [Required]
        //[RegularExpression("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:/.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
        public string email { get; set; }

        public string answer { get; set; }
    }
            
}