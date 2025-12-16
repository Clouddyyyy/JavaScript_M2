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
g.stroke();
g.fill();
//the stam of christmas tree


//The tree itself
g.fillStyle = "green";
g.strokStyle = "green";
g.beginPath();
g.rect(300, 530, 100, -250); 
g.fill();

g.beginPath(); 
g.moveTo(250, 590);  
g.lineTo(350, 530); 
g.lineTo(300, 450); 
g.closePath(); 
g.fillStyle = "green"; 
g.fill();

g.beginPath(); 
g.moveTo(450, 590);  
g.lineTo(350, 530); 
g.lineTo(400, 450); 
g.closePath(); 
g.fillStyle = "green"; 
g.fill();

g.beginPath(); 
g.moveTo(480, 510);  
g.lineTo(330, 400); 
g.lineTo(400, 350); 
g.closePath(); 
g.fillStyle = "green"; 
g.fill();

g.beginPath(); 
g.moveTo(220, 510);  
g.lineTo(370, 400); 
g.lineTo(300, 350); 
g.closePath(); 
g.fillStyle = "green"; 
g.fill();

g.beginPath(); 
g.moveTo(220, 400);  
g.lineTo(370, 300); 
g.lineTo(300, 280); 
g.closePath(); 
g.fillStyle = "green"; 
g.fill();

g.beginPath(); 
g.moveTo(500, 400);  
g.lineTo(400, 280); 
g.lineTo(310, 300); 
g.closePath(); 
g.fillStyle = "green"; 
g.fill();

g.beginPath(); 
g.moveTo(300, 280); 
g.lineTo(350, 160); 
g.lineTo(400, 280); 
g.closePath(); 
g.fillStyle = "green"; 
g.fill();


//the christmas balls
g.beginPath(); 
g.arc(220, 415, 25, 0, Math.PI * 2); 
g.fillStyle = "red";
g.stroke();
g.fill();

g.beginPath(); 
g.arc(500, 415, 25, 0, Math.PI * 2); 
g.fillStyle = "orange";
g.stroke();
g.fill();

g.beginPath(); 
g.arc(480, 525, 25, 0, Math.PI * 2); 
g.fillStyle = "lightgreen";
g.stroke();
g.fill();


g.beginPath(); 
g.arc(220, 525, 25, 0, Math.PI * 2); 
g.fillStyle = "yellow";
g.stroke();
g.fill();

g.beginPath(); 
g.arc(250, 600, 25, 0, Math.PI * 2); 
g.fillStyle = "blue";
g.stroke();
g.fill();


g.beginPath(); 
g.arc(460, 600, 25, 0, Math.PI * 2); 
g.fillStyle = "purple";
g.stroke();
g.fill();

g.beginPath(); 
g.arc(310, 280, 15, 0, Math.PI * 2); 
g.fillStyle = "red";
g.stroke();
g.fill();


g.beginPath(); 
g.arc(390, 280, 15, 0, Math.PI * 2); 
g.fillStyle = "orange";
g.stroke();
g.fill();

//the piek
g.beginPath(); 
g.moveTo(300, 100); 
g.lineTo(350, 170); 
g.lineTo(400, 100);
g.closePath(); 
g.fillStyle = "gold"; 
g.fill();

g.beginPath(); 
g.moveTo(300, 100); 
g.lineTo(350, 60); 
g.lineTo(400, 100);
g.closePath(); 
g.fillStyle = "gold"; 
g.fill();

//4 christmas houses

//First house
function huis(x, y){
    g.beginPath(); 
    g.rect(x+10, y+250, 100, 70); 
    g.fillStyle = "lightblue";
    g.fill();


    g.beginPath(); 
    g.rect(x+30, y+260, 20, 20); 
    g.fillStyle = "white";
    g.stroke();
    g.fill();

    g.beginPath(); 
    g.rect(x+70, y+260, 20, 20); 
    g.fillStyle = "white";
    g.stroke();
    g.fill();


    g.beginPath(); 
    g.moveTo(x+10, y+250); 
    g.lineTo(x+60, y+200);
    g.lineTo(x+110, y+250); 
    g.closePath(); 
    g.fillStyle = "blue"; 
    g.fill();
}

huis(0, 0);
huis(20, 150);

//Second house
function house2(x, y){
g.beginPath(); 
g.rect(x+110, y+530, 80, 70); 
g.fillStyle = "cyan";
g.fill();

g.beginPath(); 
g.rect(x+140, y+545, 20, 20); 
g.fillStyle = "white";
g.stroke();
g.fill();

g.beginPath(); 
g.moveTo(x+150, y+470); 
g.lineTo(x+190, y+530);
g.lineTo(x+110, y+530); 
g.closePath(); 
g.fillStyle = "Darkcyan"; 
g.fill();
}
house2(0, 0);
house2(400,10);

//Third house
function house3(x, y){
g.beginPath(); 
g.rect(x+600, y+530, 100, 70); 
g.fillStyle = "darkslateblue";
g.fill();

g.beginPath(); 
g.rect(x+620, y+560, 20, 20); 
g.fillStyle = "white";
g.stroke();
g.fill();

g.beginPath(); 
g.rect(x+660, y+560, 20, 20); 
g.fillStyle = "white";
g.stroke();
g.fill();

g.beginPath(); 
g.moveTo(x+600, y+530); 
g.lineTo(x+650, y+480);
g.lineTo(x+700, y+530); 
g.closePath(); 
g.fillStyle = "darkmagenta"; 
g.fill();
}
house3(0, 0);
house3(100, -300);
//Fourth house
g.beginPath(); 
g.rect(480, 230, 100, 70); 
g.fillStyle = "firebrick";
g.fill();

g.beginPath(); 
g.rect(580, 190, 50, 110); 
g.fillStyle = "firebrick";
g.fill();

g.beginPath(); 
g.rect(510, 250, 20, 20); 
g.fillStyle = "white";
g.stroke();
g.fill();

g.beginPath(); 
g.rect(550, 250, 20, 20); 
g.fillStyle = "white";
g.stroke();
g.fill();

g.beginPath(); 
g.rect(595, 210, 20, 20); 
g.fillStyle = "white";
g.stroke();
g.fill();

g.beginPath(); 
g.moveTo(480, 230); 
g.lineTo(530, 200);
g.lineTo(580, 230); 
g.closePath(); 
g.fillStyle = "crimson"; 
g.fill();

g.beginPath(); 
g.moveTo(580, 190); 
g.lineTo(630, 190);
g.lineTo(605, 140); 
g.closePath(); 
g.fillStyle = "crimson"; 
g.fill();