function generateMarkdown(answers) {
  return `# ${answers.title}
  ![badmath](https://img.shields.io/badge/license-${answers.license}-blue)

## Description
${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${answers.installation}
\`\`\`
## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
To run tests, run the following command:
\`\`\`
${answers.test}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).
`;
}
module.exports = generateMarkdown;
