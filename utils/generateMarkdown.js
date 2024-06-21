// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Function to return a license badge based on the license passed in
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === 'GPL') {
        return `![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)`;
    } else if (license === 'Apache') {
        return `![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)`;
    } else if (license === 'BSD') {
        return `![License: BSD](https://img.shields.io/badge/License-BSD-green.svg)`;
    } else {
        return '';
    }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GPL') {
        return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === 'Apache') {
        return `[Apache](https://www.apache.org/licenses/LICENSE-2.0)`;
    } else if (license === 'BSD') {
        return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `This project is licensed under the ${license} license.`;
    }
}

// TODO: Create a function to generate markdown for README
// Function to generate markdown for README
// Returns a string that will be written to the README file
function generateMarkdown(data) {
  
  // Creating Table of Contents
  // Split the table of contents into an array of words
  // Join the list items into a string
const words = data.tableOfContents.split(',').map(word => word.trim());
const tableOfContents = words.map(word => `- [${word}](#${word.toLowerCase().replace(/ /g, '-')})`).join('\n');

return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
${tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}

## Questions
If you have any questions, please contact me at [${data.email}](mailto:${data.email}). 
You can also find me on GitHub at [${data.github}](https://github.com/${data.github}).`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
