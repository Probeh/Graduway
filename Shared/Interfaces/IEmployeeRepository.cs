using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shared.Context;
using Shared.Models;

namespace Shared.Interfaces
{
    public interface IEmployeeRepository : IBaseRepository<Employee> { }
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _context;
        // ======================================= //
        public EmployeeRepository(DataContext context) => _context = context;
        // ======================================= //
        public Task<Employee> AddModel(Employee model)
        {
            return null;
        }
        public Task DeleteModel(int id)
        {
            return null;
        }
        public async Task<Employee> GetModel(int id)
        {
            return await this._context.Employees.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<IEnumerable<Employee>> GetModels()
        {
            return await this._context.Employees.ToListAsync();
        }
        public async Task<IEnumerable<Employee>> GetModels(Func<Employee, bool> predicate)
        {
            return (await this._context.Employees.ToListAsync())
                .Where(predicate);
        }
        public Task<Employee> UpdateModel(Employee model)
        {
            return null;
        }
    }
}