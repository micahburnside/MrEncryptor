// Choices.js
class Choices {
  constructor(...choices) {
    this.choices = choices;
  }

  getChoices() {
    return this.choices;
  }

  static getMenu1() {
    return new Choices('Menu1 choice1', 'Menu1 choice2', 'Menu1 choice3');
  }

  static getMenu2() {
    return new Choices('Menu2 choice1', 'Menu2 choice2', 'Menu2 choice3');
  }

  static getMenu3() {
    return new Choices('Menu3 choice1', 'Menu3 choice2', 'Menu3 choice3');
  }

  static getMenu4() {
    return new Choices('Menu4 choice1', 'Menu4 choice2', 'Menu4 choice3');
  }

  static getMenu5() {
    return new Choices('Menu5 choice1', 'Menu2 choice2', 'Menu2 choice3');
  }

  static getMenu6() {
    return new Choices('Menu6 choice1', 'Menu6 choice2', 'Menu6 choice3');
  }

  static getMenu7() {
    return new Choices('Menu7 choice1', 'Menu7 choice2', 'Menu7 choice3');
  }

}

export default Choices;
