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
  const license = data.license;
  console.log(license);
 
 
 
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  
  ## Description
  ${data.description}
  
  
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License 
  ${data.license}


 
  
  
`;
}

module.exports = generateMarkdown;
