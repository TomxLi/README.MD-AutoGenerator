//Declaring the dependencies and variables
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Prompt questions for the README.md
const questions = [
    {
        type: 'input',
        message: "Please input your GitHub username?",
        name: 'username',
        default: 'TomxLi',
    },
    {
        type: 'input',
        message: "Please input your GitHub repo name for this project?",
        name: 'repo',
    },
    {
        type: 'input',
        message: "Please input your project title?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Please write a description of this project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "please describe the installation process if applicable. ",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please provide what is this project used for?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, who contributed for this projects?",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, Is there a test included?",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose appropriate license for this project.",
        choices: [ 
            'Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License', 
            'Mozilla Public License 2.0', 
            'Eclipse Public License 2.0', 
            'Boost Software License 1.0'
        ],
        name: 'license'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Successfully generated your README.md")
    });
}
const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {
        // promp questions and generate responses
        const userResponses = await inquirer.prompt(questions);
        // GitHub api to fetch user info
        const userInfo = await api.getUser(userResponses);
        // Write new README.md
        const markdown = generateMarkdown(userResponses, userInfo);
        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

init();
