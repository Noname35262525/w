const input  = document.getElementById("INPUT");
const Print = document.getElementById("PRNT");
const output = document.getElementById("OUT");


Print.onclick = function(){
    output.textContent = input.value;
}