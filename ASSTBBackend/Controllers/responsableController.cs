using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using ASSTBBackend.Models;



namespace ASSTBBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class responsableController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public responsableController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public JsonResult Post(responsable cont)
        {


            string query = @"

INSERT INTO asstb.responsable (nomresponsable,prenomresponsable,cin,fonction,idequipe,photo) values(@nomresponsable,@prenomresponsable,@cin,@fonction,@idequipe,@photo)";
           
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                   
                    myCommand.Parameters.AddWithValue("@nomresponsable", cont.nomresponsable);
                    myCommand.Parameters.AddWithValue("@prenomresponsable", cont.prenomresponsable);
                    myCommand.Parameters.AddWithValue("@cin", cont.cin);
                    myCommand.Parameters.AddWithValue("@fonction", cont.fonction);
                    myCommand.Parameters.AddWithValue("@idequipe", cont.idequipe);
                    myCommand.Parameters.AddWithValue("@photo", cont.photo);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added with success ");
        
    }
    [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @" SELECT * FROM asstb.responsable WHERE idequipe=" + id + @"";
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
            string query = @" SELECT * FROM asstb.responsable";
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
        [HttpPut]
        public JsonResult Put(responsable cont)
        {


            string query = "update asstb.responsable set (@nomresponsable,@prenomresponsable,@cin,@fonction,@idequipe,@photo)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@nomresponsable", cont.nomresponsable);
                    myCommand.Parameters.AddWithValue("@prenomresponsable", cont.prenomresponsable);
                    myCommand.Parameters.AddWithValue("@cin", cont.cin);
                    myCommand.Parameters.AddWithValue("@fonction", cont.fonction);
                    myCommand.Parameters.AddWithValue("@idequipe", cont.idequipe);
                    myCommand.Parameters.AddWithValue("@photo", cont.photo);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated responsable with success ");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {


            string query = @"delete  from asstb.responsable where idresponsable=" + id + @"";
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
            return new JsonResult("Delete responsable with success ");
        }


    }
}
