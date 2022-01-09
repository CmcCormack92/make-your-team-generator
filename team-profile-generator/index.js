const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');
const inquirer = require('inquirer');
const fs = require('fs');

function init() {
  return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your managers name?',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Plase enter the Manager's Name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your managers ID?',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Plase enter the Manager's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your managers Email?',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Plase enter the Manager's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your managers Office Number?',
            validate: managerOfficeNumberInput => {
                if (managerOfficeNumberInput) {
                    return true;
                } else {
                    console.log("Plase enter the Manager's Office Number!");
                    return false;
                }
            }
        }

    ]).then(answer => {
        // const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)

        addEmployee();
    });
};

function addEmployee(projectData) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'next',
            message: 'Who would you like to add next?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then(answer => {
        if (answer.next === 'Engineer') {
            createEngineer()
        } else if (answer.next === 'Intern') {
            createIntern()
        } else {
            createTeam(projectData);
        }
    })
};

function createEngineer(projectData) {
    if (!projectData.engineer) {
        projectData.engineer = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineers name?',
            validate: enigineerNameInput => {
                if (enigineerNameInput) {
                    return true;
                } else {
                    console.log("Plase enter the Engineer's Name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your engineers Id?',
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Plase enter the Engineer's Id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineers Email?',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Plase enter the Engineer's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineers GitHub account?',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Plase enter the Engineer's GitHub!");
                    return false;
                }
            }
        }
    ]).then(projectData => {
        const engineer = new Engineer(projectData.engineerName, projectData.engineerId, projectData.engineerEmail, projectData.engineerGithub)
        projectData.engineer.push(engineer);
        addEmployee();
    });
};

const createIntern = projectData => {
    if (!projectData.intern) {
        projectData.intern = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your interns name?',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Plase enter the Intern's Name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your interns Id?',
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Plase enter the Intern's Id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your interns Email?',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Plase enter the Intern's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does your intern attend?',
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Plase enter the Intern's School!");
                    return false;
                }
            }
        }
    ]).then(answers => {
            projectData.intern.push(answers)
        addEmployee();
    });
};


function createTeam(projectData) {
    return new Promise((projectData) => {
        const teamHtml = generateHtml(projectData);
        fs.writeFile('./dist/index.html', teamHtml, err => {
            if (err) throw (err);

            console.log('Team Page generated! Please open the dist folder to see your new HTML file')
        });
    });
};

init();
