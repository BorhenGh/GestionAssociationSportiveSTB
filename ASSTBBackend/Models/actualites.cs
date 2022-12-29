using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Models
{
    public class actualites
    {
        public int idact { get; set; }

        public string titreact { get; set; }
        public string contenu { get; set; }
        public string datee { get; set; }
        public string lien { get; set; }
        public string image { get; set; }
        public string namefichier { get; set; }
    }
}
