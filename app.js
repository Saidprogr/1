//1 ci tapsiriq
class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}


class Admin extends Person {
  constructor(name, surname, age, role, salary) {
    super(name, surname, age);
    this.role = role;
    this.salary = salary;
  }
}


class Player extends Person {
  constructor(name, surname, age, id) {
    super(name, surname, age);
    this.id = id;
  }
}

const person = new Person("Ali", "Həsənov", 25);
const admin = new Admin("Elvin", "Quliyev", 30, "Boyuk Admin", 2500);
const player = new Player("Aysel", "Məmmədova", 22, 101);

console.log(person);
console.log(admin);
console.log(player);
//2 ci tapsiriq
function Person(name) {
  this.name = name;
}
Person.prototype.changeName = function (newName) {
  this.name = newName;
};
function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


let s = new Student("Ali", 10);
s.changeName("Murad");

console.log(s.name);
