const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

function Ball(xPos, yPos, size, color){
g.fillStyle = color;
g.beginPath();
g.arc(xPos, yPos, size, 0, 2 * Math.PI);
g.closePath();
g.fill();
g.stroke();
}

function RandomColor(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

for(let i = 0; i < 500; i++){
Ball(
    Math.random()* 1200,
    Math.random()* 900,
    10+Math.random()* 40, 
    RandomColor()
);
}






