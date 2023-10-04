let canvas = document.getElementById("HomeCanvas1");
let context = canvas.getContext("2d");

function drawLines(){
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(300,300);
    context.moveTo(300,0);
    context.lineTo(0,300);
    context.stroke();
};
function drawText(){
    context.font = "50px sans";
    console.fillStyle = "Blue";
    context.textAlign = "center";
    context.fillText("PICTURES?",canvas.width / 2,canvas.height / 2);
};

canvas.addEventListener("click", drawLines);
canvas.addEventListener("mouseenter", drawText);
