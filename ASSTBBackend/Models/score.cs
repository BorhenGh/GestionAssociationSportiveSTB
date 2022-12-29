using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ASSTBBackend.Models
{
    public class score
    {
        [Key]
      public  int idmatch { get; set; }
        public string domicile { get; set; }
        public string exterieur { get; set; }
        public string butd { get; set; }
        public string butex { get; set; }
        public string datee { get; set; }
     public int idsport { get; set; }
        [ForeignKey("idsport")]
     
        public virtual sport sport { get; set; }

    }
}
