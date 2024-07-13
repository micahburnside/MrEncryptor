#!/usr/bin/env node
import inquirer from 'inquirer';
import Question from "./Question.js";
import Menu from "./Menu.js";
// Get Menu1 Choices

const menu = Menu.getMenu1();

inquirer
  .prompt([
    Question.showLists(menu)
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

