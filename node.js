// Requirements
const inquirer = require("inquirer");
const test = require("jest");

// Write Employee function

class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name
    }
}


module.exports = Employee;