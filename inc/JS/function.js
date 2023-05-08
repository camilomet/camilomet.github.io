"use strict";

let num_people = document.querySelector("#num_people");
let custom = document.querySelector("#custom");
let bill = document.querySelector("#bill");

function CheckBill() {
  num_people.readOnly = false;
}

function CheckNumPeople() {
  document.querySelector("#reset").disabled = false;
}
function getValue(custom) {
  Calculate(custom.value);
}

function ifempty() {
  if (bill.value == 0) {
    document.getElementById("bill").style.outline = "thick solid red";
  } else if (num_people.value == 0) {
    document.getElementById("bill").style.outline = "none";
    num_people.style.outline = "thick solid red";
  } else {
    num_people.style.outline = "none";
  }
}

function Calculate(value) {
  ifempty();
  let tip = (bill.value * value) / 100 / num_people.value;
  let tipTotal = bill.value / num_people.value + tip;
  document.getElementById("tipAmount").innerHTML = tip.toFixed(2);
  document.getElementById("tipTotal").innerHTML = tipTotal.toFixed(2);
}

document.querySelector("#reset").addEventListener("click", function () {
  document.getElementById("tipAmount").innerHTML = "$0.00";
  document.getElementById("tipTotal").innerHTML = "$0.00";
  document.getElementById("bill").value = 0;
  document.getElementById("tipTotal").value = "";
});
