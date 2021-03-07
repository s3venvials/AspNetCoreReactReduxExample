using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly DataContext _context;

        public EmployeeController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public ActionResult<IEnumerable<Employees>> GetEmployees()
        {
            return _context.Employees.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Employees> GetEmployee(int id)
        {
            return _context.Employees.Find(id);
        }
    }
}