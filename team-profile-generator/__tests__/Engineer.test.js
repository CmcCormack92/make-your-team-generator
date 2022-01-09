const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
    const engineer = new Engineer( 'Engineer', 'Chris', '1', 'chrismack135@gmail.com', 'CmcCormack92');

    expect(engineer.role).toBe('Engineer');
    expect(engineer.name).toBe('Chris');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('chrismack135@gmail.com');
    expect(engineer.gitHub).toBe('CmcCormack92');
});