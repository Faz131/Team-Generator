

const inquirer = require('inquirer');
const fs = require('fs');
const htmlGeneration = require('./src/htmlGeneration');
const questions = function userInput() {
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

        // Create an Employee?
        {
            type: 'confirm',
            name: 'New Employee?',
            message: 'Would you like to create an employee?',
        },
    ]);
};


const createHTML = data => {
    fs.writeFile('Team.html', data, null, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
};

questions()
    .then(response => {
        //console.log(response);
        //     myManager = new Manager(response.id, response.email, response.name, response.number);

        //     console.log(myManager);
        //     console.log(myManager.getRole());
        // })
        // .catch(err => {
        //     console.log(err)
        // })

        return htmlGeneration(response);
    })
    // Displays data from prompts
    .then(data => {
        return createHTML(data);
    })
    // Used to log out any errors that occur
    .catch(err => {
        console.log(err)
    })

console.log(htmlGeneration);