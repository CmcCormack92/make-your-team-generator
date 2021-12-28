const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const manager = new Manager('Chris', '1', 'chrismack135@gmail.com', '105');

    expect(manager.name).toBe('Chris');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('chrismack135@gmail.com');
    expect(manager.officeNumber).toBe('105');
});