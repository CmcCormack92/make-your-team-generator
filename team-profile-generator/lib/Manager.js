const Employee = require('./Employee');

class Manager extends Employee {
    constructor(role, name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role
    }

   getRole() {
       return 'Manager'
   }

   getOfficeNumber() {
       return this.officeNumber
   }
   
};

module.exports = Manager;