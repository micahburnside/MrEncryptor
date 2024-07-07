#!/usr/bin/env node
import inquirer from 'inquirer';
import Question from "./Question.js";

inquirer
  .prompt([
    console.log("Question Test"),
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

