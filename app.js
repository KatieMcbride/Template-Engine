const inquirer = require("inquirer");
// const axios = require("axios");
// const fs = require("fs");

inquirer
  .prompt([
    {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    }, 
    {
    type: 'input',
    message: 'What is your id number?',
    name: 'idNumber',
    }, 
    {
    type: 'input',
    message: 'What is your e-mail?',
    name: 'email',
    }, 
    {
    type: "list",
    name: "titles",
    message: "What is your title at work?",
    choices: [
        { name: "Manager", value: 1 }, 
        { name: "Engineer", value: 2 }, 
        { name: "Intern", value: 3}]
    }
  ])
  .then ((responses) => {
        if (responses.titles === 1) {
            inquirer
                .prompt([
                {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
                }
            ])
            
        }
        else if (responses.titles === 2) {
            inquirer
                .prompt([
                {
                type: 'input',
                message: 'What is your GitHub name?',
                name: 'github',
                }
            ])
        }
        else if (responses.titles === 3) {
            inquirer
                .prompt([
                {
                type: 'input',
                message: 'What school do you go to?',
                name: 'school',
                }
            ])
        } 
});