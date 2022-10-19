
// javascript code
document.getElementById("Button1").onclick = function Btn1() {

// input
var n1 = +document.getElementById("number1").value
var n2 = +document.getElementById("number2").value
var n3 = +document.getElementById("number3").value
var n4 = +document.getElementById("number4").value
var n5 = +document.getElementById("number5").value


// Procces
var total = (number1 + number2 + number3 + number4 + number5) /5;


//Output
document.getElementById("Grade").innerHTML = `Final CS10 Grade ${total}%`
}