class Question {

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
