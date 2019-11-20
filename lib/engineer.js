// Requirements
const inquirer = require("inquirer");
const test = require("jest");
const Employee = require("./employee")

// Write Engineer function

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;