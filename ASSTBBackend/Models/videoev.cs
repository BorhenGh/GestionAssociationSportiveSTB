using ASSTBBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class videoev
    { [Key]
     public   int id { get; set; }
    public    string video { get; set; }
     public int    idevents { get; set; }
        [ForeignKey("idevents")]
        public virtual eventss events { get; set; }
      public  string nom { get; set; }

    }
}
