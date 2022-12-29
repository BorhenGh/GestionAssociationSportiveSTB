using ASSTBBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class EvenementController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public EvenementController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public JsonResult Post(evenement cont)
        {


            string query = @"


INSERT INTO asstb.event (titreevent,description,datee,photo) values(@titreevent,@description,@datee,@photo)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@titreevent", cont.titreevent);
                    myCommand.Parameters.AddWithValue("@description", cont.description);
                    myCommand.Parameters.AddWithValue("@datee", cont.datee);
                    myCommand.Parameters.AddWithValue("@photo", cont.photo);


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added with success ");

        }
        [HttpPut]
        public JsonResult Put(evenement cont)
        {


            string query = "update asstb.event set titreevent=@titreevent,description=@description,datee=@datee,photo=@photo where idevent=@id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@titreevent", cont.titreevent);
                    myCommand.Parameters.AddWithValue("@description", cont.description);
                    myCommand.Parameters.AddWithValue("@date", cont.datee);
                    myCommand.Parameters.AddWithValue("@photo", cont.photo);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated event with success ");
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT *  FROM asstb.event ORDER BY idevent";
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
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {


            string query = @"delete from asstb.event where idevent=" + id + @"";
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
            return new JsonResult("Delete Event Event with success ");
        }

    }
    

}
