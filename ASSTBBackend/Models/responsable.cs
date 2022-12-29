using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ASSTBBackend.Models
{
    public class responsable
    {
        [Key]
      public  int idresponsable { get; set; }
      public  string nomresponsable { get; set; }
      public  string prenomresponsable { get; set; }
        public int cin { get; set; }
        public string fonction { get; set; }
        public string photo { get; set; }
        public int idequipe { get; set; }
        [ForeignKey("idequipe")]
        public virtual  equipes  equipes { get; set; }
    }
}
