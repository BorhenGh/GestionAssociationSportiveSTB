using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class UploadController : ControllerBase
    {
        private string _pathstring = @"C:\Users\USER\Desktop\AsstbFront\ASSTB\src\assets\picture\";
        [HttpPost]
        [Route("upload")]
        public void Upload(IFormFile file)
        {
            if (file.Length > 0)
            {
                string filepath = Path.Combine(_pathstring, file.FileName);
                using (Stream filestream = new FileStream(filepath, FileMode.Create))
                {
                    file.CopyTo(filestream);
                }
            }
        }
    }
}

