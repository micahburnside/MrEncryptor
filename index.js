#!/usr/bin/env node
import inquirer from 'inquirer';
import Question from "./Question.js";

inquirer
  .prompt([
    Question.getListChoices()
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt could not be rendered in current environment', error)
    } else {
      console.error('Something went wrong:', error);
    }
  });

