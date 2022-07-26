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
    
    {type: "list",
     name: "license",
     choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "None"],
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    //this is where we write the data to a new file
    console.log('this is coming from the writToFile function')
    console.log(data)
    fs.writeFile('../README.md', data, err => {
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
            # Project: ${answers.name}
            Description: ${answers.description}
            License: ${answers.license}
        `

        // write output to file
        writeToFile(markdown)
    })
}




// Function call to initialize app
init();
