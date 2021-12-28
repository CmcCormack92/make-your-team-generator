const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '',id = '', email = '', officeNumber = '') {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = function () {
        inquirer    
        .prompt({
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?'
        })
        .then(({officeNumber}) => {
            this.employee = new Manager(officeNumber);
        });
    };

    getRole = function () {
        this.role = Intern;
    }
};

module.exports = Manager;