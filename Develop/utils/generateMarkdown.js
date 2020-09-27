function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#badges)
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

## Badges
![badmath](https://img.shields.io/badge/license-${answers.license}-blue)

## Contributing
${answers.contributing}

## Tests
To run tests, run the following command:
\`\`\`
${answers.test}
\`\`\`
## Questions
`;
}
module.exports = generateMarkdown;
