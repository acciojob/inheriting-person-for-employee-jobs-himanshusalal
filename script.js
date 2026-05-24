// Person Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person method
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee Constructor
function Employee(name, age, jobTitle) {
  // Call Person constructor
  Person.call(this, name, age);

  this.jobTitle = jobTitle;
}

// Inherit Person prototype
Employee.prototype = Object.create(Person.prototype);

// Fix constructor
Employee.prototype.constructor = Employee;

// Employee method
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Demo Function
function runDemo() {
  const person = new Person("Alice", 25);
  person.greet();

  const employee = new Employee("Bob", 30, "Manager");
  employee.jobGreet();
}

// Do not change below
window.Person = Person;
window.Employee = Employee;