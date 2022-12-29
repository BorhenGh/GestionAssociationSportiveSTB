using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASSTBBackend.Models
{
    public class galerie
    {
        [key]
        int idimageev { get; set; }
        string photo { get; set; }
        [ForeignKey("idevents")]
        public virtual  eventss idevents { get; set; }

    }
}
