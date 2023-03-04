function Engineer(id, email, name, gitHub) {
    Employee.call(this, id, email, name);

    this.GitHub = gitHub;
    this.getGithub = function () {
        return this.getGithub;
    }
    this.getRole = function () {
        return 'Engineer'
    }
}