// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of your project ?",
        name: "title",
    },
    {
        type: "input",
        message: "Can you write a description about your project ?",
        name: "description",
    },
    
    {
        type: "input",
        message: "what is the installation of your project ?",
        name: "installation",
    },
    {
        type: "input",
        message: "what is the usage of your project ?",
        name: "usage",
    },
    {
        type: "list",
        message: "what license would you like to use for your project ?",
        name: "license",
        choices: ["No License","Apache License 2.0","GNU General Public License v3.0","MIT License"]
    }
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response));
        });
}

// Function call to initialize app
init();
