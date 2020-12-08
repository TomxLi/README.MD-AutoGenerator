// Generate README.md based on user's input
function generateMarkdown(userResponses, userInfo) {
  let draftToC = `## Table of Contents`;
  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };
  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };
  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };
  if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };

  let draftMarkdown = 
  `# ${userResponses.title}

  [![License](https://img.shields.io/github/license/${userResponses.username}/${userResponses.repo})](LICENSE.md)
  
  ## Description 
  ${userResponses.description}
  `

  draftMarkdown += draftToC;
 
  draftMarkdown += `
  * [License](#license)`;
  
  if (userResponses.installation !== '') {
  draftMarkdown +=
  `
  ## Installation
  ${userResponses.installation}`
  };

  if (userResponses.usage !== '') { 
  draftMarkdown +=
  `
  
  ## Usage 
  ${userResponses.usage}`
  };
  
  if (userResponses.contributing !== '') {
  `
  ## Contributer
  ${userResponses.contributing}`
  };
  
  if (userResponses.tests !== '') {
  draftMarkdown +=
  `
  ## Tests
  ${userResponses.tests}`
  };

  draftMarkdown +=
  `
  ## License
  ${userResponses.license}
  `;

  let draftDev = 
  `
  ---
  
  ## Questions
  ![Developer Profile Picture](${userInfo.avatar_url})
  <br />
  if you have any questions, contact me with the information below:
  <br />
  GitHub: [${userResponses.username}](https://github.com/${userResponses.username})<br />
  <br />
  or Email me with any questions: ${userResponses.email}<br /><br />
  `;

  draftMarkdown += draftDev;
  return draftMarkdown;
}

module.exports = generateMarkdown;
