"use strict";

function wcount(string_text) {
  var res = {};
  string_text = string_text.replace(/[^a-z0-9]/gi, " ");  // remove non alphabetic characters
  var word_list = string_text.split(" ");

  for (var i in word_list) {
    var word = word_list[i].toLowerCase();  // make all letters lower case
    if (word != "") {
      if (res[word])
        res[word] += 1;
      else
        res[word] = 1;
    }
  }
  return res;
}


function WrdLst(string_text) {
  this.words_count = wcount(string_text);

  this.maxCountWord = function () {
    var word_max = Object.keys(this.words_count)[0];
    var max = this.words_count[word_max];

    for (var word in this.words_count) {
      var candidate = this.words_count[word];
      if (candidate > max || (candidate == max && word < word_max)) {
        max = this.words_count[word];
        word_max = word;
      }
    }
    return word_max;
  }

  this.minCountWord = function () {
    var word_min = Object.keys(this.words_count)[0];
    var min = this.words_count[word_min];

    for (var word in this.words_count) {
      var candidate = this.words_count[word];
      if (candidate < min || (candidate == min && word < word_min)) {
        min = this.words_count[word];
        word_min = word;
      }
    }
    return word_min;
  }

  this.getWords = function () {
    var res = [];
    for (var word in this.words_count) {
      res.push(word);
    }
    return res.sort();  // sort the the words by alphabetical order
  }

  this.getCount = function (word) {
    var count = this.words_count[word];
    return count
  }

  this.applyWordFunc = function (f) {
    return this.getWords().map(f);
  }

}

/*
var obj = new WrdLst("dog fish fish cat cat cat fish bowl fish bowl fish cat cat zoo");
console.log(obj.words_count);
console.log(obj.getWords());
console.log(obj.maxCountWord());
console.log(obj.minCountWord());
console.log(obj.getCount("fish"));
function f (word) {return word.length;}
console.log(obj.applyWordFunc(f));
*/

exports.wcount = wcount;
exports.WrdLst = WrdLst;
