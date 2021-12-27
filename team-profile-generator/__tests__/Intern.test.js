const Intern = require('../lib/Intern.js');

test('creates a Intern object', () => {
    const intern = new Intern('Chris', 'chrismack135@gmail.com', 'Rutgers');

    expect(intern.name).toBe('Chris');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('chrismack135@gmail.com');
    expect(intern.school).toBe('Rutgers');
});