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