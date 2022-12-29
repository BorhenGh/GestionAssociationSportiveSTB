using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class categorie
    {
        [Key]
        public int idcategorie { get; set; }
        public string type { get; set; }
        
        [ForeignKey("idsport") ]
        public virtual sport idsport { get; set; }

    }
}
