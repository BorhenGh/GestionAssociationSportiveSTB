using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class videoalbum
    {
        [Key]
     public    int id { get; set; }
      public   string video { get; set; }
        public int idalbum { get; set; }

        public   string nom { get; set; }
        [ForeignKey("idalbum")]
        public virtual album album { get; set; }

    }
}
