using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ASSTBBackend.Models
{
    public class joueursasstb
    {
        [Key]
       public int idj { get; set; }
       public string nomj { get; set; }
   public     string prenomj { get; set; }
   public     string sexe { get; set; }
      public  int age { get; set; }
       public int cin { get; set; }
    public    string datenaiss { get; set; }
  public      string poste { get; set; }


    public    string photo { get; set; }
        public int idequipe { get; set; }
        [ForeignKey("idequipe")]
        public virtual equipes equipe { get; set; }

    }
}
