// javascript code
document.getElementById("Button1").addEventListener("click", btnClicked);

// input
function btnClicked() {
  let n1 = +document.getElementById("number1").value;
  let n2 = +document.getElementById("number2").value;
  let n3 = +document.getElementById("number3").value;
  let n4 = +document.getElementById("number4").value;
  let n5 = +document.getElementById("number5").value;

  // Procces
  let total = (n1 + n2 + n3 + n4 + n5) / 5;

  //Output
  document.getElementById("Grade").innerHTML = total;
}
 