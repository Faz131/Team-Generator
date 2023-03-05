
// Pull from Employee constructor
const Employee = require('./Employee');

// Creating Manager constructor from Employee constructor

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.Manager
    }
}

module.exports = Manager;