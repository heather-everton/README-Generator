const inquirer = require('inquirer');
// const fs = require('fs');

// const generateMarkdown = require('./utils/generateMarkdown.js');

// const pageContent = generateMarkdown(projectName);

// fs.writeFile('./README.md', pageContent, err => {
//   if (err) throw err;

//   console.log('Readme complete! Check out README.md to see the output!');
// });


// // array of questions for user
// const questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
      }
    ])
    .then(answers => console.log(answers));
  
// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


// // const printReadmeData = (readmeDataArr) => {
// //     console.log(readmeDataArr);
// //   };
  
// //   printReadmeData(readmeDataArgs);
// 

// const generatePage = (projectName) => `ProjectName: ${projectName}`;
// console.log(generatePage(projectName));
