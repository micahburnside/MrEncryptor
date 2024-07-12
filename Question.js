// Question.js
import Choices from './Choices.js';

class Question {
  constructor(type, name, message, choices) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  static getListChoices(menu) {
    let choices = menu.getChoices();

    return {
      type: 'list',
      name: 'listChoice',
      message: 'Select an option from the menu',
      choices: choices,
    };
  }
}

export default Question;
