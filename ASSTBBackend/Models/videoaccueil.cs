using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace ASSTBBackend.Models
{
    public class videoaccueil
    {
        [Key]
       public int id { get; set; }
     public   string video { get; set; }


    }
}
