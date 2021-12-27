const Employee = require('./Employee');

test('creates an employee object', () => {
    const employee = new Employee('Chris');

    expect(employee.name).toBe('Chris');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});