const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

g.fillStyle = "azure";
g.strokeStyle = "azure";
g.beginPath(); 
g.rect(0, 200, 800, 600); 
g.stroke();
g.fill();

g.fillStyle = "gainsboro";
g.strokeStyle = "gainsboro";
g.beginPath(); 
g.rect(0, 250, 800, -600); 
g.stroke();
g.fill();
// the boarders color no touch

g.fillStyle = "sienna";
g.strokeStyle = "sienna";
g.beginPath(); 
g.rect(300, 530, 100, 600);
g.fill();
//the stam of christmas tree

g.fillStyle = "green";
g.strokStyle = "green";
g.beginPath();
g.rect(300, 530, 100, -250); 
g.stroke();
g.fill();

g.beginPath();
g.moveTo(200, 400); 
g.lineTo(350, 250); 
g.lineTo(400, 300); 
g.closePath(); 
g.fillStyle = "lightgreen"; 
g.fill();



