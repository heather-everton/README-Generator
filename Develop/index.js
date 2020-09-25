const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [projectName] = readmeDataArgs;
 
// const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./utils/generateMarkdown.js');

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

const generatePage = (projectName) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${projectName}</title>
    </head>
  
    <body>
      <h1>${projectName}</h1>
    </body>
    </html>
    `;
  };
  
  fs.writeFile('README.md', generatePage(projectName), err => {
    if (err) throw err;
  
    console.log('Readme complete! Check out README.md to see the output!');
  });
  