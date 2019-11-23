const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
// const outputPath = path.resolve(__dirname, "output", "team.html");
const teamMembers = [];
const idArray = [];
let allemployeeHtml = '';

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
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
    });

    module.exports = Manager;
    }
}    

function moreTeam(){
    inquirer
        .prompt([
        {
        type: "list",
        name: "continue",
        message: "Would you like to add more employees?",
        choices: [
            { name: "Yes" }, 
            { name: "No" }]
        }  
    ])
    .then(userChoice => {
    if (userChoice.continue === "Yes") {
        createTeam();
    }
    else if (userChoice.continue === "No") {
        buildTeam();
        console.log('no');
    }
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
}    

function addEngineer() {
    inquirer
    .prompt([
    {
    type: 'input',
    message: 'What is your name?',
    name: 'engineerName',
    }, 
    {
    type: 'input',
    message: 'What is your id number?',
    name: 'engineerId',
    }, 
    {
    type: 'input',
    message: 'What is your e-mail?',
    name: 'engineerEmail',
    },
    {
    type: 'input',
    message: 'What is your GitHub name?',
    name: 'engineerGithub',
    }, 
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            moreTeam();
    });   
    module.exports = Engineer;   
}


function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'internName',
            }, 
            {
            type: 'input',
            message: 'What is your id number?',
            name: 'internId',
            }, 
            {
            type: 'input',
            message: 'What is your e-mail?',
            name: 'internEmail',
            },
            {
            type: 'input',
            message: 'What school do you go to?',
            name: 'internSchool',
            }
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        moreTeam();
        })
    
    module.exports = Intern;
};

function buildTeam() {
    console.log(teamMembers);
    
    teamMembers.forEach(element => {
           let employeeHtml = 
           `<div class="col-3 card m-5">
            <div class="container">
                <div class="card-header text-center text-white bg-primary font-weight-bold">
                ${element.getRole()}
                </div>
                <div> Employee name: ${element.getName()}</div>
                <div> Employee iD: ${element.getId()}</div>
                <div> Employee email: ${element.getEmail()}</div>
                <div> Employee office Number: ${element.getOfficeNumber()}</div> 
            </div>
            </div>`;
    
        
        
        allemployeeHtml  = allemployeeHtml + employeeHtml;
    });

    const headerHtml =
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <title>Employee</title>
        </head>
        <body>
        <div class="jumbotron">
            <h1 class= "text-center">Team Members</h1>
        </div>
        <div class="row d-flex">`;
        let htmlBuild = headerHtml + allemployeeHtml;
        const footerHtml = `
        </div> 
        </body>
        </html>`;
        htmlBuild = htmlBuild + footerHtml;
    
    console.log(htmlBuild);

    return fs.writeFileSync("team.html", htmlBuild , "utf-8")
    

};

appMenu();
