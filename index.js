function Employee(id, email, name) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.getId = function () {
        return this.id;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.getName = function () {
        return this.name;
    };
    this.getRole = function () {
        return 'Employee';
    }
}

function Manager(id, email, name, officeNumber) {
    Employee.call(this, id, email, name);

    this.officeNumber = officeNumber;
    this.getOfficeNumber = function () {
        return this.officeNumber;
    }
    this.getRole = function () {
        return 'Manager'
    }
}

function Engineer(id, email, name, gitHub) {
    Employee.call(this, id, email, name);

    this.GitHub = gitHub;
    this.getGithub = function () {
        return this.getGithub;
    }
    this.getRole = function () {
        return 'Engineer'
    }
}

function Intern(id, email, name, school) {
    Employee.call(this, id, email, name);

    this.school = school;
    this.getSchool = function () {
        return this.school;
    }
    this.getRole = function () {
        return 'Intern'
    }
}


const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require();
const managerQuestions = function userInput() {
    return inquirer.prompt([

        //Manager Name
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager\'s name?',
        },

        //Manager ID
        {
            type: 'input',
            name: 'id',
            message: 'What is the Manager\'s EMployee ID?',
        },

        //Manager Email
        {
            type: 'input',
            name: 'email',
            message: 'What is the Manager\'s Email?',
        },

        //Manager Number
        {
            type: 'input',
            name: 'number',
            message: 'What is the Manager\'s Office Number?',
        },
    ]);
};




managerQuestions()
    .then(response => {
        //console.log(response);
        myManager = new Manager(response.id, response.email, response.name, response.number);

        console.log(myManager);
        console.log(myManager.getRole());
    })
    .catch(err => {
        console.log(err)
    })