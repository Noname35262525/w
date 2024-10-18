let canvas = document.getElementById("HomeCanvas1");
let context = canvas.getContext("2d");

function drawLines(){
    context.beginPath();
    context.moveTo(0,200);
    context.lineTo(300,300);
    context.moveTo(300,200);
    context.lineTo(0,300);
    context.stroke();
};
function drawText(){
    context.font = "40px sans";
    console.fillStyle = "Blue";
    context.textAlign = "center";
    context.fillText("box to fill space",canvas.width / 2,canvas.height / 2);
    context.fillText("BLANK",canvas.width / 2,canvas.height / 4);
};
drawText();
drawLines();