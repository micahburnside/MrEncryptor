class Question {

  static listChoices = ['choice 1', 'choice 2', 'choice 3', 'choice 4', 'choice 5', 'choice 6'];

  constructor(type, name, message, choices) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  static getListChoices() {
    return {
      type: 'list',
      name: 'listChoice',
      message: 'Select an option from the menu',
      choices: Question.listChoices,
    };
  }
}

export default Question;
