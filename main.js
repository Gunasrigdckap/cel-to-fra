

function convert(){
let fraVal=(document.getElementById("input").value * (9/5)) + 32;
document.getElementById("result").innerHTML=fraVal.toFixed(2)+" F";
}