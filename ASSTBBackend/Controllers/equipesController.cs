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
    public class equipesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public equipesController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @" SELECT * FROM asstb.equipes";
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
            string query = @" SELECT * FROM asstb.equipes WHERE idsport=" + id + @"";
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
        public JsonResult Post(equipes cont)
        {


            string query = @"


INSERT INTO asstb.equipes (nomequipe,description,idsport,idcategorie,genre,region) values (@nomequipe,@description,@idsport,@idcategorie,@genre,@region)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@nomequipe", cont.nomequipe);
                    myCommand.Parameters.AddWithValue("@description", cont.description);
                    myCommand.Parameters.AddWithValue("@idsport", cont.idsport);
                    myCommand.Parameters.AddWithValue("@idcategorie", cont.idcategorie);
                    myCommand.Parameters.AddWithValue("@genre", cont.genre);
                    myCommand.Parameters.AddWithValue("@region", cont.region);



                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added with success ");

        }
        [HttpPut]
        public JsonResult Put(equipes cont)
        {


            string query = "update asstb.equipes set (@nomequipe=nomequipe,@description=description,@idsport=idsport,@idcategorie=idcategorie,@genre=genre,@region=region where idequipe=@idequipe";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@nomequipe", cont.nomequipe);
                    myCommand.Parameters.AddWithValue("@description", cont.description);
                    myCommand.Parameters.AddWithValue("@idsport", cont.idsport);
                    myCommand.Parameters.AddWithValue("@idcategorie", cont.idcategorie);
                    myCommand.Parameters.AddWithValue("@genre", cont.genre);
                    myCommand.Parameters.AddWithValue("@region", cont.region);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated equipes with success ");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {


            string query = @"delete  from asstb.equipes where idequipe=" + id + @"";
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
            return new JsonResult("Delete equipes with success ");
        }



    }
}
