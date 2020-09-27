const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown.js');

// const pageContent = generateMarkdown(answers);




// // array of questions for user
// const questions = [
    const questions = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter your email address');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter your GitHub username');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is your project title?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter project title');
                    return false;
                    }
                }
            },
            
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter a valid description');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide the installation instructions:',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter valid instructions');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide some usage information', 
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter valid usage information');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Enter the contribution guidelines: (required)', 
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter valid contribution guidelines');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Provide the test instructions:'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license: (required)',
                choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU GPLv2', 'GNU AGPLv3', 'GNU LGPLv3', 'MPL-2.0', 'Boost 1.0', 'CCO 1.0', 'EPL 1.0', 'GNU FDL v1.3', 'IPL 1.0', 'ODC BY', 'ODbL', 'PDDL', 'Perl', 'Artistic 2.0', 'OFL 1.1', 'Unlicense'], 
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please choose a license');
                    return false;
                    }
                }
            }
        
        ])
    }
  
// ];

// function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)


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
// questions().then(answers => console.log(answers));

// questions()
//   .then(answers => {
//     console.log(answers)
//     writeToFile('README.md', generateMarkdown({...answers}))
// })

questions()
  .then(answers => {

    fs.writeFile('./README.md', generateMarkdown({...answers}), err => {
        if (err) throw err;
        console.log('Readme complete! Check out README.md to see the output!')
    })
  })
    // const pageHTML = generateMarkdown(answers);
    // fs.writeFile('./README.md', (answers, err) => {
    // if (err) throw err;

    // console.log('Readme complete! Check out README.md to see the output!');
    // });