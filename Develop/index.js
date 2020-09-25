const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [projectName] = readmeDataArgs;
 
// const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// // array of questions for user
// const questions = [

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
  
  fs.writeFile('README.md', generateMarkdown(projectName), err => {
    if (err) throw err;
  
    console.log('Readme complete! Check out README.md to see the output!');
  });
  