/**
 * Created by Dimitar on 26.06.2014 г..
 */
var ctx = document.getElementById("my-canvas").getContext("2d");

ctx.beginPath();
ctx.setLineDash([4, 4]);
ctx.moveTo(40, 40);
ctx.lineTo(580, 40);
ctx.lineTo(580, 580);
ctx.lineTo(40, 580);
ctx.closePath();
ctx.strokeStyle = "red";
ctx.stroke();

ctx.font = "60px Arial";
ctx.fillText("I love JavaScript", 80, 100);

ctx.fillStyle = "FFFF00";
ctx.fillRect(118, 140, 360, 360);

ctx.fillStyle = "black"
ctx.font = "bold 220px Arial";
ctx.fillText("JS", 200, 460);
