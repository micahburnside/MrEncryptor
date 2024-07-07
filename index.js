#!/usr/bin/env node
import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    console.log("Question Test")

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Answer Test")
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

