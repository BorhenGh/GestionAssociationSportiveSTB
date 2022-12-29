using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class eventss
    {
        [Key]
        public int idevents {get;set;}
        public string nomevent { get; set; }
        public string description { get; set; }
        public string photo { get; set; }
        public int idevent { get; set; }
        [ForeignKey("idevent")]
        public virtual evenement evenenement { get; set; }

     public DateTime datee { get; set; }
    }
}
