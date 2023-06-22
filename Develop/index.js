// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please describe your project:',
        name: 'desc',
      },
      {
        type: 'input',
        message: 'Please provide intallation instructions for your project:',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Please provide details on how to use your project:',
        name: 'use',
      },
      {
        type: 'input',
        message: 'Did anyone else contribute to your project?',
        name: 'contrib',
      },
      {
        type: 'list',
        message: 'Which license did you use for your project?',
        choices: [
            "MIT",
            "Apache-2.0",
            "GPL-3.0",
            "BSD-3-Clause",
            "Unlicense",
            "Mozilla Public License 2.0",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Eclipse Public License 1.0",
            "GNU FDL",
            "ISC",
            "Creative Commons Zero v1.0 Universal",
            "Other",
          ],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitName',
      },
      {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',
      },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err){
            console.error(err);
        } else {
            console.log(`README.md successfully generated as ${fileName}`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (questions)
    .then((answers) => {
        const markdown = generateMarkdown.generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
