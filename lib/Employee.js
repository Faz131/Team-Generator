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