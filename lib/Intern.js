
// importing constructor from Employee
const Employee = require('./Employee');

// Constructing Intern
class Intern extends Employee { //pulling info from the Employee constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() { // Update employee information to match Intern
        return 'Intern'
    }
}
module.exports = Intern;
