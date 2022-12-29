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
    public class scoreController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public scoreController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @" SELECT * FROM asstb.score WHERE  idsport= "+ id + @"order by datee asc";
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
            string query = @" SELECT * FROM asstb.score ";
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
       
        [HttpPost]
        public JsonResult Post(score cont)
        {


            string query = @"


INSERT INTO asstb.score (domicile,exterieur,butd,butex,datee,idsport) values(@domicile,@exterieur,@butd,@butex,@datee,@idsport)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                   
                    myCommand.Parameters.AddWithValue("@domicile", cont.domicile);
                    myCommand.Parameters.AddWithValue("@exterieur", cont.exterieur);
                    myCommand.Parameters.AddWithValue("@butd", cont.butd);
                    myCommand.Parameters.AddWithValue("@butex", cont.butex);
                    myCommand.Parameters.AddWithValue("@datee", cont.datee);
                    myCommand.Parameters.AddWithValue("@idsport", cont.idsport);



                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added with success ");

        }
        [HttpPut]
        public JsonResult Put(score cont)
        {


            string query = "update asstb.score set domicile=@domicile,exterieur=@exterieur,butd=@butd,date=@datee,idsport=@idsport where idsport=@idsport";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@domicile", cont.domicile);
                    myCommand.Parameters.AddWithValue("@exterieur", cont.exterieur);
                    myCommand.Parameters.AddWithValue("@butd", cont.butd);
                    myCommand.Parameters.AddWithValue("@butex", cont.butex);
                    myCommand.Parameters.AddWithValue("@datee", cont.datee);
                    myCommand.Parameters.AddWithValue("@idsport", cont.idsport);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated Sport with success ");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {


            string query = @"delete from asstb.score where idmatch=" + id + @"";
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
            return new JsonResult("Delete match with success ");
        }


    }
}
