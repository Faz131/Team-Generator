// Connecting to the Employee class
const Manager = require('../lib/Manager');

// Creating the Employee test

describe('Employee creation', () => {
    it('Should throw an error if string is empty', () => {
        const err = () => new Manager('Mike');
        const newErr = new Error('Must provide a valid username')
    });


})