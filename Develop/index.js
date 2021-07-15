// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of your project ?",
        name: "tittle",
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
        choice: ["No License","Apache License 2.0","GNU General Public License v3.0","MIT License"]
    },

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const markdownString = generateMarkdown(response);
            writeToFile("README.md", markdownString);
        });
}

// Function call to initialize app
init();
