// Connecting to the Employee class
const Intern = require('../lib/Intern');

// Creating the Employee test

describe('Intern creation', () => {
    it('Should throw an error if string is empty', () => {
        const err = () => new Intern('Mike');
        const newErr = new Error('Must provide a valid username')
    });


})