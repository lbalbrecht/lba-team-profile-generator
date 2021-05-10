const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

let team =[]

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const render = require("./lib/htmlRenderer");

// Start the application by running node.js
function start() {
    // Add a new manager
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your manager's name?",
            name: 'managerName'
        },
        {
            type: 'input',
            message: "What is your manager's ID?",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "What is your mangager's email address?",
            name: "managerEmail",
        },
        {
            type: 'input',
            message: "What is your manager's office number?",
            name: 'officeNumber',
        },
    ]).then(response => {
        const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
        team.push(newManager);
        newMember();
    });
}

// Build a team of engineers and interns
function newMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            choices: ['Engineer', 'Intern', 'Quit'],
            name: 'newEmployee'
        }
    ]).then(response => {
        switch (response.newEmployee) {
            case 'Engineer':
                newEngineer();
                break;
            case 'Intern':
                newIntern();
                break;
            case 'Quit':
                create();
                break;
        }
    })
};

// Add an engineer to the team
function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'engineerName'
        },
        {
            type: 'input',
            message: "What is your engineer's ID number?",
            name: 'engineerId'
        },
        {
            type: 'input',
            message: "What is your engineer's email address?",
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: "What is your engineer's Github username?",
            name: 'engineerGithub'
        }
    ]).then(response => {
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
        team.push(newEngineer);
        newMember()
    })
}

// Add an intern to the team
function newIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'internName'
        },
        {
            type: 'input',
            message: "What is your intern's ID number?",
            name: 'internId'
        },
        {
            type: 'input',
            message: "What is your intern's email address?",
            name: 'internEmail'
        },
        {
            type: 'input',
            message: "Where does your intern go to school?",
            name: 'internSchool'
        }
    ]).then(response => {
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
        team.push(newIntern);
        newMember()
    })
};

function create() {
    fs.writeFile(outputPath, render(team), function (err) {
        if (err) throw err;
    })
};

start();
