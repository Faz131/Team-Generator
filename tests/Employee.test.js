// Connecting to the Employee class
const Employee = require('../lib/Employee');

// Creating the Employee test

describe('Employee creation', () => {
    it('Should throw an error if string is empty', () => {
        const err = () => new Employee('Mike');
        const newErr = new Error('Must provide a valid username')
    });


})