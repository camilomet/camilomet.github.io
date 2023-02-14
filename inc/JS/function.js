function CheckBill() {
  document.getElementById("num_people").readOnly = false;
}

function CheckNumPeople() {
  document.getElementById("reset").disabled = false;
}
function getValue(custom) {
  value = document.getElementById("custom").value;
  Calculate(value);
}

function ifempty() {
  bill = document.getElementById("bill").value;
  num_people = document.getElementById("num_people").value;
  if (bill == 0) {
    document.getElementById("bill").style.outline = "thick solid red";
  } else if (num_people == 0) {
    document.getElementById("bill").style.outline = "none";
    document.getElementById("num_people").style.outline = "thick solid red";
  } else {
    document.getElementById("num_people").style.outline = "none";
  }
}

function Calculate(value) {
  ifempty();
  bill = document.getElementById("bill").value;
  num_people = document.getElementById("num_people").value;
  tip = (bill * value) / 100 / num_people;
  tipTotal = bill / 5 + tip;
  document.getElementById("tipAmount").innerHTML = tip.toFixed(2);
  document.getElementById("tipTotal").innerHTML = tipTotal.toFixed(2);
}

function Reset() {
  document.getElementById("tipAmount").innerHTML = "$0.00";
  document.getElementById("tipTotal").innerHTML = "$0.00";
  document.getElementById("bill").value = 0;
  document.getElementById("tipTotal").value = "";
}
