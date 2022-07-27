// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
     name: "name",
     message: "What is the name of your project?" 
    },

    {type: "input",
    name: "description",
    message: "What is the desciption of your project?"
    },

    {type: "input",
     name: "installation",
     message: "What is the installation being used?"
    },

    {type: "input",
     name: "usage",
     message: "What is the usage?"
    },
    
    {type: "checkbox",
     name: "license",
     choices: ["Apache License 2.0", "Artistic License 2.0", "GNU General Public License v3.0", "MIT License", "None"],
    },

    {type: "input",
     name: "contributing",
     message: "Any contributors?"
    },

    {type: "input",
     name: "test",
     message: "What test(s) were used?"
    },

    {type: "link",
     name: "questions",
     message: "Github and e-mail address in case of further questions/information needed:"
    },

    {type: "link",
     name: "video",
     message: "Place video demo here:"
    },

];

// TODO: Create a function to write README file
function writeToFile(info) {
    //this is where we write the data to a new file
    console.log('this is coming from the writToFile function')
    console.log(info)
    fs.writeFile('../README.md', info, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
        }

    })
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        //write markdown from answers
const markdown = `
# Project: 

${answers.name}

## Table of Contents:
[Description](#description)

[License](#license)

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Test](#test)

[Video](#video)

## Description: 

${answers.description}

## License: 

${answers.license}

## Installation: 

${answers.installation}

## Usage: 

${answers.usage}

## Contributing: 

${answers.contributing}

## Test: 

${answers.test}

## Questions: 

${answers.questions}

## Video:

${answers.video}

`
        // write output to file
        writeToFile(markdown)
    })
}




// Function call to initialize app
init();
