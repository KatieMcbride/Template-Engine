// Requirements
const inquirer = require("inquirer");
const test = require("jest");
const Employee = require('./employee');

// Write Employee function

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;