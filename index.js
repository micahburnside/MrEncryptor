#!/usr/bin/env node
import inquirer from 'inquirer';
import Question from "./Question.js";
import Choices from "./Choices.js";
// Get Menu1 Choices

const menu = Choices.getMenu1();

inquirer
  .prompt([
    Question.getListChoices(menu)
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

