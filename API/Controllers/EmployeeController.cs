using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Entities;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    // [Authorize(AuthenticationSchemes = "Bearer")]
    public class EmployeeController : ControllerBase
    {
        private readonly DataContext _context;

        public EmployeeController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public ActionResult<ResponseModel> GetEmployees()
        {
            var employees = _context.Employees.ToList();
            return Ok(new ResponseModel() { Message = "", Status = 202 });
        }

        [HttpGet("{id}")]
        public ActionResult<Employees> GetEmployee(int id)
        {
            return Ok(_context.Employees.Find(id));
        }
    }
}