// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "No License":
      return "";

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  
  ## ${data.description}
  
  This project is creating a web application that would ask user list of questions and user would pick a correct answer from given answers. There is a time limited to answer the questions and every time an incorrect answer is picked, a certain amount of time will be subtract from the giving time. This is an interesting project but also required alot of researchs and testing the codes. Through out the project, i learnt how to start out with a pseudo code and break into smaller tasks from it. Although i didnt complete the project yet, but i will countiue working on it to finish the project.
  
  ## ${data.installation}
  
  ## ${data.usage}
  
  ## ${data.license}
 
  
  ## Contaction Information
  email me at : khanhtruong_1992@yahoo.com 
  
`;
}

module.exports = generateMarkdown;
