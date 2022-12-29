using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ASSTBBackend.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ASSTBBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public userController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public JsonResult Post(user cont)
        {


            string query = @"


INSERT INTO asstb.utilisateur(pseudo,email,password) values(@pseudo,@email,@password)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@pseudo", cont.pseudo);
                    myCommand.Parameters.AddWithValue("@email", cont.email);
                    myCommand.Parameters.AddWithValue("@password", cont.password);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added user with success ");

        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT *  FROM asstb.utilisateur ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

    }
}
