// TODO: Include packages needed for this application
// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Array of questions for the user to answer
const questions = [
    'What is the title of your project?',
    'What is the description of your project?',
    'What would be in your table of contents (use , between content words)?',
    'What are the installation instructions?',
    'What is the usage information?',
    'What are the contribution guidelines?',
    'What are the test instructions?',
    'What license would you like to use?',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
// Function to write to the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('README.md has been generated');
    });
}

// TODO: Create a function to initialize app
// Function to initialize the app
// Prompts the user with questions and then writes the README file
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'tableOfContents'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contribution'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'tests'
            },
            {
                type: 'list',
                message: questions[7],
                name: 'license',
                choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None']
            },
            {
                type: 'input',
                message: questions[8],
                name: 'github'
            },
            {
                type: 'input',
                message: questions[9],
                name: 'email'
            }
        ])
        .then((response) => {
            writeToFile('_README.md', generateMarkdown(response));
        });
}

// Function call to initialize app
// Calls the init function
init();
