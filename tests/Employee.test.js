// Connecting to the Employee class
const Employee = require('../lib/Employee');

// Creating the Employee test

describe('Employee creation', () => {
    it('Should create a new employee array with a name, id, email', () => {
        const employee = new Employee(1111, 'msmith@email.com', 'Matt Smith');
        expect(employee.name).toBe('Matt Smith'); //strict test of employee name
        expect(employee.id).toEqual(expect.any(Number)); //strict test of employee id
        expect(employee.email).toEqual(expect.any(String));
    });


})