const Lad = document.getElementById("cl");
const no = document.getElementById("DU");
const Rb = document.getElementById("rb");
const up = document.getElementById("up");
let co = 0;

no.onclick = function(){
    co-=1;
    Lad.innerHTML = co;
};
Rb.onclick = function(){
    co=0;
    Lad.innerHTML = co;
};
up.onclick = function(){
    co+=1;
    Lad.innerHTML = co;
}