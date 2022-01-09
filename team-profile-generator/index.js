const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];



inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your managers name?',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("Please enter the Manager's Name!");
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
                console.log("Please enter the Manager's ID!");
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
                console.log("Please enter the Manager's Email!");
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
                console.log("Please enter the Manager's Office Number!");
                return false;
            }
        }
    }

]).then(answer => {
    const manager = new Manager('manager', answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)
    team.push(manager);

    addEmployee();
});


function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'next',
            message: 'Who would you like to add next?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then(answer => {
        if (answer.next === 'Engineer') {
            createEngineer();
        } else if (answer.next === 'Intern') {
            createIntern();
        } else {
            createTeam(team);  
        }
    });
};

function createEngineer() {
     inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineers name?',
            validate: enigineerNameInput => {
                if (enigineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's Name!");
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
                    console.log("Please enter the Engineer's Id!");
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
                    console.log("Please enter the Engineer's Email!");
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
                    console.log("Please enter the Engineer's GitHub!");
                    return false;
                }
            }
        }
    ]).then(answer => {
        const engineer = new Engineer('engineer', answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        team.push(engineer);
        addEmployee();
    });

};

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your interns name?',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's Name!");
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
                    console.log("Please enter the Intern's Id!");
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
                    console.log("Please enter the Intern's Email!");
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
                    console.log("Please enter the Intern's School!");
                    return false;
                }
            }
        }
    ]).then(answer => {
        const intern = new Intern('intern', answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        team.push(intern);
        addEmployee();
    })
}

function createTeam(team) {
        const teamHtml = generateHtml(team);
        fs.writeFile('./dist/index.html', teamHtml, (err) => {
            if (err) throw (err);
            console.log('Your Team Web Page was generated')
        });
};

