//1 ci tapsiriq
function Person(surname, name, age) {
  this.surname = surname;
  this.name = name;
  this.age = age;
}
Person.prototype.changeName = function (newName) {
  this.name = newName;
};
function Admin(surname, name, age, role, salary) {
  Person.call(this, surname, name, age);
  this.role = role;
  this.salary = salary;
}
Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;

function Player(surname, name, age, id) {
  Person.call(this, surname, name, age);
  this.id = id;
}
Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;









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
