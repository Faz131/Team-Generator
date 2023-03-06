// Connecting to the Employee class
const Engineer = require('../lib/Engineer');

// Creating the Employee test

describe('Engineer creation', () => {
    it('Should throw an error if string is empty', () => {
        const err = () => new Engineer('Mike');
        const newErr = new Error('Must provide a valid username')
    });


})