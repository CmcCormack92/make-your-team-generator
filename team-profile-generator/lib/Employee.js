const inquirer = require("inquirer");

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = function () {
        inquirer    
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            })
            .then(({name}) => {
                this.employee = new Employee(name);
            });
    };

    getId = function () {
        inquirer    
        .prompt({
            type: 'text',
            name: 'id',
            message: 'What is your employee ID?'
        })
        .then(({id}) => {
            this.employee = new Employee(id);
        });
    };

    getEmail = function () {
        inquirer    
        .prompt({
            type: 'text',
            name: 'email',
            message: 'What is your email?'
        })
        .then(({email}) => {
            this.employee = new Employee(email);
        });
    }
}

module.exports = Employee;