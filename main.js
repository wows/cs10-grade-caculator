// SIMPLE adi



// Event listener on Button
document.getElementById("boo").addEventListener("click", btnclicked);

function btnclicked(){

// input
let n1 = +document.getElementById("number1");
let n2 = +document.getElementById("number2");
let n3 = +document.getElementById("number3");
let n4 = +document.getElementById("number4");
let n5 = +document.getElementById("number5");




// Procces
let total = (n1 + n2 + n3 + n4 + n5);


//Output
document.getElementById("output").innerHTML = total;
}