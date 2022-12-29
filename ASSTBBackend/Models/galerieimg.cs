using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class galerieimg
    {
        [Key]
     public   int idimageev { get; set; }
      public  string photo { get; set; }
      public int  idevents { get; set; }
        [ForeignKey("idevents")]
        public virtual eventss events { get; set; }
    }
}
