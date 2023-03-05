// function Engineer(id, email, name, gitHub) {
//     Employee.call(this, id, email, name);

//     this.GitHub = gitHub;
//     this.getGithub = function () {
//         return this.getGithub;
//     }
//     this.getRole = function () {
//         return 'Engineer'
//     }
// }

// Import Employee Constructor
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //Pull from Employee constructor
        super(name, id, email);
        this.github = github;
    }


    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

// Export

module.exports = Engineer;
