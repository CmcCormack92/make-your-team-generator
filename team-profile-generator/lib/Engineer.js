const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(role, name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = role
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github
    }
};

module.exports = Engineer;