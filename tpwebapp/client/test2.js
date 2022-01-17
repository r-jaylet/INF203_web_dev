"use strict";

var colors = ["red", "blue", "green", "black"];

function request(name) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../../" + name.toString());
  xhr.onload = function() {
    var div = document.getElementById("show_div");
    div.textContent = this.responseText;
  }
  xhr.send();
}

function show() {
  request("show");
}

function add() {
  var xhr = new XMLHttpRequest();
  var value = Math.floor(Math.random() * 4) + 1;
  var color = colors[Math.floor(Math.random() * colors.length)];
  var title = "t" + Math.floor(Math.random() * 10);

  xhr.open("GET", `../../add?title=${title}&value=${value}&color=${color}`);
  xhr.onload = function() {
    var div = document.getElementById("show_div");
    div.textContent = this.responseText;
  }
  xhr.send();
}

function remove() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../../remove?index=0");
  xhr.onload = function() {
    var div = document.getElementById("show_div");
    div.textContent = this.responseText;
  }
  xhr.send();
}

function _clear() {
  request("clear");
}

function restore() {
  request("restore");
}

function pie() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../../piech");
  xhr.onload = function() {
    var div = document.getElementById("svg_div");
    if (document.getElementById("piechart") != null)
      div.removeChild(document.getElementById("piechart"));
    div.innerHTML = this.responseText;
  }
  xhr.send();
}

function localpie() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../../piech");
  xhr.onload = function() {
    var div = document.getElementById("svg_div");
    if (document.getElementById("piechart") != null)
      div.removeChild(document.getElementById("piechart"));
    div.innerHTML = this.responseText;
  }
  xhr.send();
}
