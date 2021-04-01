using System.Collections.Generic;
using API.Entities;

namespace API.Models
{
    public class ResponseModel
    {
        public string Message { get; set; }

        public int Status { get; set; }

        public List<Employees> EmployeeData { get; set; } = new List<Employees>();
    }
}