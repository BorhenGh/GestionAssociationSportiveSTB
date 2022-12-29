using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ASSTBBackend.Models
{
    public class albumimg
    {
        [Key]
       public  int idimage { get; set; }
       public  string description { get; set; }
     public   string photo { get; set; }
        public int idalbum { get; set; }
        [ForeignKey("idalbum")]
        public virtual album album { get; set; }


    }
}
