class Person {
  constructor(name = 'Anonymouse', age = 0) {
    this.name = name;
    this.age = age;
  }
  greeting(food) {
    return `Hi my name is ${this.name} and I like to eat ${food}.`;
  }
  description() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = 'undecided') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  description() {
    let describe = super.description();

    if(this.hasMajor){
      describe = describe + `My major is ${this.major}.`;
    }
    return describe;
  }
}

const me = new Student('R', 4, 'CS');
const unknown = new Student();
// console.log(me.greeting('sushi'), me);
// console.log(me.description());
// console.log(unknown.greeting('burgers'), unknown);
// console.log(unknown.description());
// console.log(me);
// console.log(unknown);

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  home() {
    return !!this.homeLocation;
  }
  greeting() {
    let greet = super.greeting('burritos');

    if(this.home()){
      greet = greet + ` I'm visting from ${this.homeLocation}.`;
    }
    return greet;
  }
}

const travel = new Traveler('B', 21, 'SF');
const travel2 = new Traveler('E', 6);
console.log(travel2.greeting());