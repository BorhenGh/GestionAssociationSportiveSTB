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
    public class videoevController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public videoevController(IConfiguration configuration){
            _configuration = configuration;
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {


            string query = @"delete from asstb.videoevent where id=" + id + @"";
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
            return new JsonResult("Delete Video Event with success ");
        }
        [HttpPut]
        public JsonResult Put(videoev cont)
        {


            string query = "update asstb.videoevent set video=@video,idevents=@idevents,nom=@nom where id=@id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@video", cont.video);
                    myCommand.Parameters.AddWithValue("@idevents", cont.idevents);
                    myCommand.Parameters.AddWithValue("@nom", cont.nom);


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated Video event with success ");
        }

        [HttpPost]
        public JsonResult Post(videoev cont)
        {


            string query = @"


INSERT INTO asstb.videoevent (video,idevents,nom) values(@video,@idevents,@nom)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@video", cont.video);
                    myCommand.Parameters.AddWithValue("@idevents", cont.idevents);
                    myCommand.Parameters.AddWithValue("@nom", cont.nom);
                  


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added with success ");

        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" SELECT * FROM asstb.videoevent ";
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
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @" SELECT * FROM asstb.videoevent WHERE idevents=" + id + @"";
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
    

