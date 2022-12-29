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
    public class BureauController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public BureauController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT * FROM asstb.membrebureau";
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
        [Route ("Getpresident")]
        [HttpGet]
        public JsonResult Getpresident()
        {
            string query = @"SELECT * FROM asstb.membrebureau where poste like 'Président'";
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
        [Route("GetSecrétairegénéral")]
        [HttpGet]
        public JsonResult GetSecrétairegénéral()
        {
            string query = @"SELECT * FROM asstb.membrebureau where poste like 'Secrétaire général'";
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
        [Route("GetViceprésident")]
        [HttpGet]
        public JsonResult GetViceprésident()
        {
            string query = @"SELECT * FROM asstb.membrebureau where poste like 'Vice-président'";
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
        [Route("GetTrésorerier")]
        [HttpGet]
        public JsonResult GetTrésorerier()
        {
            string query = @"SELECT * FROM asstb.membrebureau where poste like 'Trésorerier'";
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
        [Route("GetSecrétairegénéraladjoint")]
        [HttpGet]
        public JsonResult GetSecrétairegénéraladjoint()
        {
            string query = @"SELECT * FROM asstb.membrebureau where poste like 'Secrétaire général adjoint'";
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
        [Route("GetTrésorerieradjoint")]
        [HttpGet]
        public JsonResult GetTrésorerieradjoint()
        {
            string query = @"SELECT * FROM asstb.membrebureau where poste like 'Trésorerier adjoint'";
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
        [Route("Getmembre")]
        [HttpGet]
        public JsonResult Getmembre()
        {
            string query = @"SELECT * FROM asstb.membrebureau where poste like 'membre'";
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


            string query = @"delete from asstb.membrebureau where  idb=" + id + @"";
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
            return new JsonResult("Delete Le membre with success ");
        }
        [HttpPost]
        public JsonResult Post(bureau cont)
        {


            string query = @"


INSERT INTO asstb.membrebureau (nomb,prenomb,sexe,cinb,poste,datenaissb,photo) values(@nomb,@prenomb,@sexe,@cinb,@poste,@datenaissb,@photo)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@nomb", cont.nomb);
                    myCommand.Parameters.AddWithValue("@prenomb", cont.prenomb);
                    myCommand.Parameters.AddWithValue("@sexe", cont.sexe);
                    myCommand.Parameters.AddWithValue("@cinb", cont.cinb);
                    myCommand.Parameters.AddWithValue("@poste", cont.poste);
                    myCommand.Parameters.AddWithValue("@datenaissb", cont.datenaissb);
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
        public JsonResult Put(bureau cont)
        {


            string query = "update asstb.membrebureau set nomb=@nomb,prenomb=@prenomb,sexe=@sexe,cinb=@cinb,poste=@posteb,datenaissb=@datenaissb,photo=@photo where idsport=@idsport";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AsstbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@nomb", cont.nomb);
                    myCommand.Parameters.AddWithValue("@prenomb", cont.prenomb);
                    myCommand.Parameters.AddWithValue("@sexe", cont.sexe);
                    myCommand.Parameters.AddWithValue("@cinb", cont.cinb);
                    myCommand.Parameters.AddWithValue("@poste", cont.poste);
                    myCommand.Parameters.AddWithValue("@datenaissb", cont.datenaissb);
                    myCommand.Parameters.AddWithValue("@photo", cont.photo);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("updated Sport with success ");
        }

    }

}

