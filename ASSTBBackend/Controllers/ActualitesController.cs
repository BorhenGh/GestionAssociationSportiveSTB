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
    public class ActualitesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ActualitesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT *  FROM asstb.actualite ORDER BY datee desc ";
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
        [Route("GetLimitAct")]
        [HttpGet]
        public JsonResult GetLimitAct()
        {
            string query = @"SELECT Top 3 * FROM asstb.actualite ORDER BY datee desc 
            ";
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
        public JsonResult Put(actualites cont)
        {


            string query = "update asstb.actualite set titreact=@titreact,contenu=@contenu,datee=@datee,lien=@lien,image=@image,namefichier=@namefichier where idact=@id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@titreact", cont.titreact);
                    myCommand.Parameters.AddWithValue("@contenu", cont.contenu);
                    myCommand.Parameters.AddWithValue("@datee", cont.datee);
                    myCommand.Parameters.AddWithValue("@lien", cont.lien);
                    myCommand.Parameters.AddWithValue("@image", cont.image);
                    myCommand.Parameters.AddWithValue("@namefichier", cont.namefichier);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated actualite with success ");
        }
        [HttpPost]
        public JsonResult Post(actualites cont)
        {


            string query = @"


INSERT INTO asstb.actualite (titreact,contenu,datee,lien,image,namefichier) values(@titreact,@contenu,@datee,@lien,@image,@namefichier)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@titreact", cont.titreact);
                    myCommand.Parameters.AddWithValue("@contenu", cont.contenu);
                    myCommand.Parameters.AddWithValue("@datee", cont.datee);
                    myCommand.Parameters.AddWithValue("@lien", cont.lien);
                    myCommand.Parameters.AddWithValue("@image", cont.image);
                    myCommand.Parameters.AddWithValue("@namefichier", cont.namefichier);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added with success ");

        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {


            string query = @"delete from asstb.actualite where idact=" + id + @"";
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
            return new JsonResult("Delete Actualite with success ");
        }

    }
}
