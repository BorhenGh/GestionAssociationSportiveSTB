using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class evenement
    { 
        [Key]
      public  int idevent { get; set; }
        public string titreevent { get; set; }

        public string description { get; set; }
        public string photo { get; set; }
        public DateTime datee { get; set; }
    }
}
