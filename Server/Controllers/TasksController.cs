using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shared.DTOs;
using Shared.Interfaces;
using Shared.Models;

namespace Server.Controllers
{
    public class TaskController : BaseController<EmployeeTask, ITaskRepository>
    {
        // ======================================= //
        private readonly ITaskRepository repository;
        // ======================================= //
        public TaskController(ITaskRepository repository) : base(repository) => this.repository = repository;
        // ======================================= //

        [HttpGet("{id}")]
        protected async Task<IActionResult> GetTasksByEmployee([FromRoute] int employeeId)
        {
            var result = await this.repository.GetModels(x => x.EmployeeId == employeeId);
            return Ok(result);
        }
        [HttpPut]
        protected async Task<IActionResult> CreateModel([FromBody] TaskCreateDTO model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok();
        }

        [HttpPost]
        protected async Task<IActionResult> UpdateModel([FromBody] TaskUpdateDTO model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok();
        }
    }
}