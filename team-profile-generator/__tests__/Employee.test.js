const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Chris', '1', 'chrismack135@gmail.com');

    expect(employee.name).toBe('Chris');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('chrismack135@gmail.com');
});