using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class sport
    {
        [Key]
        public int idsport { get; set; }
        public string nomsport { get; set; }
        public string description { get; set; }
        public string photo { get; set; }

    }
}
