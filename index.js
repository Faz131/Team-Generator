
// HTML creation
const htmlGeneration = require('./src/htmlGeneration');


// Links to employee classess
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inter = require('./lib/Intern');


const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices');

// Array to input team members
const employeeArray = [];

// Add manager questions
const mangerPrompt = () => {
    return inquirer.prompt([

        //Manager Name
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager\'s name?',
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log('Please provide a name');
                } return false;
            }
        },

        //Manager ID
        {
            type: 'input',
            name: 'id',
            message: 'What is the Manager\'s Employee ID?',
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log('Please provide a ID');
                } return false;
            }
        },

        //Manager Email
        {
            type: 'input',
            name: 'email',
            message: 'What is the Manager\'s Email?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) // Testing if valid chars are used for an email
                if (valid) {
                    return true;
                } else {
                    console.log('Please provide a valid email address');
                } return false;
            }
        },

        //Manager Number
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s phone number?',
            validate: nameIput => {
                if (isNaN(nameIput)) { // validating if a number was entered
                    console.log('Please provide a valid phone number')
                    return false;
                } else {
                    return true;
                }

            }

        }

    ])



        .then(inputManager => {
            const { name, id, email, officeNumber } = inputManager;
            const manager = new Manager(name, id, email, officeNumber);
            employeeArray.push(manager);
            console.log(manager)

        })
}


// Employee creation prompts
const createEmployee = () => {
    console.log('Now lets build your team!')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose an employee to create',
            choices: ['Engineer', 'Intern']

        },

        {
            type: 'input',
            name: 'name',
            message: 'What is your team members name?',
            validate: nameIput => {
                if (nameIput) {
                    return true;
                } else {
                    console.log('Please provide a valid name');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please provide the ID for your team member',
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee ID')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s Email?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) // Testing if valid chars are used for an email
                if (valid) {
                    return true;
                } else {
                    console.log('Please provide a valid email address');
                } return false;
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please provide a Githumb username',
            when: (input) => input.role === 'Engineer'// If engineer is choosen prompted for Github username
        },

        {
            type: 'input',
            name: 'school',
            message: 'Please provide a school name',
            when: (input) => input.role === 'Intern'// If intern is choosen prompts for school name

        },

        {
            type: 'confirm',
            name: 'employeeInfo',
            message: 'Do you have an employee to add?'
        }
    ])


        .then(employeeInfo) => {
    const { name, id, emprole, github, school, employeeInfo } = teamData;
    const employee;

    if (role === 'Engineer') // Decision based on employee role
        teamData = new Engineer(name, id, emai, github);

}
  
    
    
}



// mangerPrompt()
//     .then(response => {

//     })

mangerPrompt()
    .then(createEmployee)
