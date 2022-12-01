/** Generate markdown for README***/
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Github URL

[${data.github}](https://github.com/${data.github}/)

## Description 

${data.description}


## Table of Contents

* [Installations](#dependencies)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributors](#contributors)

* [Test](#test)


## Installation of Dependencies

To install dependencies, run these commands:

\`\`\`
${data.dependencies}
\`\`\`



## Usage

${data.usage}

${renderLicenseSection(data.license)}


## Contributors

${data.contributors}

Contact me for more information at ${data.email}


## Tests 

To run tests, run these commands:

\`\`\`
${data.test}
\`\`\`

`;
}

/*** Function to render badge ***/
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

/***  Function to render link *****/
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}


/*****  Function to render section ****/
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

module.exports = generateMarkdown;