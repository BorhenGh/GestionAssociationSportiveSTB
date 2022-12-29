using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class equipes
    {
        [Key]
       public int idequipe { get; set; }
      public  string nomequipe { get; set; }
    public    string description { get; set; }
     public   string genre { get; set; }
    public    string region { get; set; }
    public int idsport { get; set; }
        [ForeignKey("idsport")]
        public virtual sport sport { get; set; }
    public int idcategorie { get; set; }
        [ForeignKey("idcategorie")]
        
        public virtual categorie categorie { get; set; }

    }
}
