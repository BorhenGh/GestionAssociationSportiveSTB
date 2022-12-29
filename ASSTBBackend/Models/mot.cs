using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class mot
    {
        [Key]
      public  int id { get; set; }
 public       string nompres { get; set; }
    public    string prenompres { get; set; }
   public     string description { get; set; }
      public  string photo { get; set; }
    }
}
