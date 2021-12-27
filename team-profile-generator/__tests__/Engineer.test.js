const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Chris', 'chrismack135@gmail.com', 'CmcCormack92');

    expect(engineer.name).toBe('Chris');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('chrismack135@gmail.com');
    expect(engineer.gitHub).toBe('CmcCormack92');
});