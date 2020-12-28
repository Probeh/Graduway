using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shared.Context;
using Shared.Models;

namespace Shared.Interfaces
{
    public interface ITaskRepository : IBaseRepository<EmployeeTask> { }
    public class TaskRepository : ITaskRepository
    {
        private readonly DataContext _context;
        // ======================================= //
        public TaskRepository(DataContext context) => _context = context;
        // ======================================= //
        public Task<EmployeeTask> AddModel(EmployeeTask model)
        {
            return null;
        }
        public Task DeleteModel(int id)
        {
            return null;
        }
        public async Task<EmployeeTask> GetModel(int id)
        {
            return await this._context.Tasks.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<IEnumerable<EmployeeTask>> GetModels(Func<EmployeeTask, bool> predicate)
        {
            return (await this._context.Tasks.ToListAsync())
                .Where(predicate);
        }
        public async Task<IEnumerable<EmployeeTask>> GetModels()
        {
            return await this._context.Tasks.ToListAsync();
        }

        public Task<EmployeeTask> UpdateModel(EmployeeTask model)
        {
            return null;
        }
    }
}