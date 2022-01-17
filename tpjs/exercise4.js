"use strict";

let ex3 = require ('./exercise3.js');
let Stud = ex3.Stud;
let FrStdt = ex3.FrStdt;
let fs = require('fs');

class Prmtn {
  constructor() {
    this.array = [];
  }

  add(student) {
    this.array.push(student)
  }

  size() {
    return this.array.length
  }

  get(i) {
    return this.array[i]
  }

  print() {
    var s = "";
    for (var i in this.array)
      s += this.array[i].toString() + '\n';
    return s;
  }

  write() {
    return JSON.stringify(this.array);
  }

  read(str) {
    var parse = JSON.parse(str);
    for (var i in parse) {
      var stud = parse[i];
      if (stud.nationality == undefined)
        stud = Object.assign(new Stud(), stud);
      else
        stud = Object.assign(new FrStdt(), stud);
      this.array.push(stud);
    }
  }

  readF(fileName) {
    var self = this;
    fs.readFile(fileName, function (err, data) {
      if (err) console.log(err);
      else self.read(data.toString());
    });
  }

  saveFile(fileName) {
    fs.writeFile(fileName, this.write(), function (err, data) {
      if (err) console.log(err);
    });
  }

}

/* var student1 = new Stud ("Dupond", "John", 1835);
var student2 = new FrStdt ("Doe", "John", 432, "American");
var promo = new Prmtn()
promo.add(student1)
promo.add(student2)
console.log(promo.write());
var promo2 = new Prmtn()
promo2.readF('test.txt');
promo2.saveFile('test.txt'); */

exports.Prmtn = Prmtn;
