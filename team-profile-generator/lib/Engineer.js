const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', email = '', gitHub = '') {
        super(name, email);
        this.gitHub = gitHub;
    }
};

module.exports = Engineer;