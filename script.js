// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;

// Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class (inherits from Person)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // call parent constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Demo function (for button click)
function runDemo() {
  const person = new Person("Alice", 25);
  person.greet();

  const employee = new Employee("Bob", 30, "Manager");
  employee.jobGreet();
}
