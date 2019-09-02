'use strict';

var canvas;
var ctx;

function draw(posX, posY) {
  //clear
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //draw
  ctx.beginPath();
  ctx.moveTo(posX, posY);
  ctx.ellipse(posX,
              posY,
              5,
              5,
              0.7854,
              0,
              2 * Math.PI,
              false);
  ctx.strokeStyle = "white";
  ctx.stroke();
}

onmessage = function(ev) {
  if(ev.data) {
    if (!canvas) canvas = ev.data.canvas;
    if (!ctx) ctx = canvas.getContext('2d');
    draw(ev.data.posX, ev.data.posY);
  }
}