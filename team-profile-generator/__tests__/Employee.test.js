const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Chris', 'chrismack135@gmail.com');

    expect(employee.name).toBe('Chris');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('chrismack135@gmail.com');
});