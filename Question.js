class Question {

  static menuChoices = ['choice 1', 'choice 2', 'choice 3', 'choice 4', 'choice 5', 'choice 6'];

  constructor(type, name, message, choices) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  static getMenuQs() {
    return {
      type: 'list',
      name: 'menuChoice',
      message: 'Select an option from the menu',
      choices: Question.menuChoices,
    };
  }
}

export default Question;
  constructor(type, name, message, choices) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  static getMenuChoices() {
    return {
      type: 'list',
      name: 'menuChoice',
      message: 'Select an option from the menu',
      choices: Question.menuChoices,
    };
  }
}

export default Question;
