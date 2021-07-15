// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  
  ## ${data.description}
  
  This project is creating a web application that would ask user list of questions and user would pick a correct answer from given answers. There is a time limited to answer the questions and every time an incorrect answer is picked, a certain amount of time will be subtract from the giving time. This is an interesting project but also required alot of researchs and testing the codes. Through out the project, i learnt how to start out with a pseudo code and break into smaller tasks from it. Although i didnt complete the project yet, but i will countiue working on it to finish the project.
  
  ## ${data.installation}
  
  ## ${data.usage}
  This is how the page would look like.
  ![Code Quiz](https://user-images.githubusercontent.com/82126894/120589888-722b3880-c3ee-11eb-96c6-48fac7245201.png)
  
  ## Credits
  credits to my instructor and my tutor helped me out alot during this project. 
  
  ## Contaction Information
  email me at : khanhtruong_1992@yahoo.com 
  
`;
}

module.exports = generateMarkdown;
