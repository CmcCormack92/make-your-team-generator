const Intern = require('../lib/Intern.js');

test('creates a Intern object', () => {
    const intern = new Intern('Chris', '1', 'chrismack135@gmail.com', 'Rutgers');

    expect(intern.name).toBe('Chris');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('chrismack135@gmail.com');
    expect(intern.school).toBe('Rutgers');
});