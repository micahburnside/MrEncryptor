// Question.js
import Menu from './Menu.js';

class Question {
  constructor(type, name, message, choices) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  static showLists(menu) {
    let choices = menu.showMenu();

    return {
      type: 'list',
      name: 'listChoice',
      message: 'Select an option from the menu',
      choices: choices,
    };
  }
}

export default Question;
