let user = {
  name: "Ali",
  age: 25,
  retirementAge: 65,


  setAge(newAge) {
    this.age = newAge;
  },


  getYearsBeforeRetirement() {
    return this.retirementAge - this.age;
  }
};

user.setAge(30);
console.log("Yaş:", user.age);

let yearsLeft = user.getYearsBeforeRetirement();
console.log("Pensiyaya qalan illər:", yearsLeft);
