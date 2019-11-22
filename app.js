const inquirer = require("inquirer");
const fs = require("fs");
// const writeFileAsync = util.promisify(fs.writeFile);


function appMenu() {
   createManager() 
    function createManager() {
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
            message: 'What is your office number?',
            name: 'officeNumber',
            }
      ]).then(answers => {
        class Manager{
            constructor (name, id, email, officeNumber) {
                super(name, id, email);
                answers.name = name;
                answers.id = id;
                answers.email = email;
                answers.officeNumber = officeNumber;
            }
        }
        module.exports = Manager;
        createTeam();
      });
    }
    function createTeam() {
      inquirer.prompt([
        {
        type: "list",
        name: "titles",
        message: "What is your title at work?",
        choices: [
            { name: "Engineer", value: 1 }, 
            { name: "Intern", value: 2}]
        }
      ]).then(userChoice => {
        if (userChoice === 1) {
            addEngineer();
        }
        else if (userChoice === 2) {
           addIntern()
        }
    });
    function addEngineer() {
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
            message: 'What is your GitHub name?',
            name: 'github',
            }
      ]).then(answers => {
        class Engineer{
            constructor (name, id, email, gitHub) {
                super(name, id, email);
                answers.name = name;
                answers.id = id;
                answers.email = email;
                answers.gitHub = gitHub;
            }
        }
        module.exports = Engineer;
        createTeam();
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
        /* create interin */
        createTeam();
      });
    }
    function buildTeam() {
      fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    createManager();
};
};

appMenu();
