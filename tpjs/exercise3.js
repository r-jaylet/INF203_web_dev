"use strict";

class Stud {
  constructor(lastName, firstName, id) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.id = id;
  }

  toString() {
    var str = "student: " + this.lastName + ", " + this.firstName + ", " + this.id;
    return str;
  }
}

class FrStdt  extends Stud {
  constructor(lastName, firstName, id, nationality) {
    super(lastName, firstName, id);
    this.nationality = nationality;
  }

  toString() {
    var str = "student: " + this.lastName + ", " + this.firstName + ", " + this.id + ", " + this.nationality;
    return str;
  }
}

/* var student1 = new Stud ("Dupond", "John", 1835);
var student2 = new FrStdt ("Doe", "John", 432, "American");
console.log(student1.toString());
console.log(student2.toString()); */

exports.Stud = Stud;
exports.FrStdt = FrStdt;
