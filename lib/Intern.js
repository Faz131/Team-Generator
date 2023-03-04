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
