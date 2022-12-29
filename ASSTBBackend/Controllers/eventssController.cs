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
    public class eventssController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public eventssController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpPost]
        public JsonResult Post(eventss cont)
        {


            string query = @"


INSERT INTO asstb.events (nomevent,description,datee,idevent,photo) values(@nomevent,@description,@datee,@idevent,@photo)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@nomevent", cont.nomevent);
                    myCommand.Parameters.AddWithValue("@description", cont.description);
                    myCommand.Parameters.AddWithValue("@datee", cont.datee);
                    myCommand.Parameters.AddWithValue("@idevent", cont.idevent);
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
        public JsonResult Put(eventss cont)
        {


            string query = "update asstb.event set nomevent=@nomevent,description=@description,datee=@datee,idevent=@idevent,photo=@photo where idevents=@id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@nomevent", cont.nomevent);
                    myCommand.Parameters.AddWithValue("@description", cont.description);
                    myCommand.Parameters.AddWithValue("@date", cont.datee);
                    myCommand.Parameters.AddWithValue("@idevent", cont.idevent);
                    myCommand.Parameters.AddWithValue("@photo", cont.photo);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated events with success ");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {


            string query = @"delete from asstb.events where idevents=" + id + @"";
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
            return new JsonResult("Delete Liste  Events with success ");
        }
        [HttpGet("{id}") ]
        public JsonResult Get(int id)
        {
            string query = @" SELECT * FROM asstb.events WHERE idevent=" + id+@"";
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
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT *  FROM asstb.events ORDER BY idevents";
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

