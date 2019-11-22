const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/htmlRenderer");
const teamMembers = [];
const idArray = [];



function appMenu() {
   createManager(); 
    function createManager() {
      inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'managerName',
            }, 
            {
            type: 'input',
            message: 'What is your id number?',
            name: 'managerId',
            }, 
            {
            type: 'input',
            message: 'What is your e-mail?',
            name: 'managerEmail',
            },
            {
            type: 'input',
            message: 'What is your office number?',
            name: 'managerOfficeNumber',
        }
    ]).then (answers => {
        const Manager{
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        }
        module.exports = Manager;
    });
}

function createTeam() {
    inquirer
        .prompt([
        {
        type: "list",
        name: "titles",
        message: "What is your title at work?",
        choices: [
            { name: "Engineer" }, 
            { name: "Intern" }]
        }
    ])
    .then(userChoice => {
        if (userChoice.titles === "Engineer") {
            addEngineer();
        }
        else if (userChoice.titles === "Intern") {
           addIntern()
        }
});

function addEngineer() {
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
    type: 'input',
    message: 'What is your GitHub name?',
    name: 'github',
    }, 
    ])
    .then(answers => {
        const Engineer{
            
        }
        module.exports = Engineer;
    });      
}


function addIntern() {
    inquirer.prompt([
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
            type: 'input',
            message: 'What school do you go to?',
            name: 'school',
            }
      ]).then(answers => {
        class Intern{
            constructor (name, id, email, school) {
                answers.name = name;
                answers.id = id;
                answers.email = email;
                answers.school = school;
            }
        }
        module.exports = Intern;
        createTeam();
      });
    }
    // function buildTeam() {
        const html =
        ``
    //   fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    // }
    // createManager();
};
};

appMenu();
