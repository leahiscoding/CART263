"use strict";


function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw (){
    push();
    fill(255, 0, 0);
    ellipse(30, 30, 50, 50);
    fill (0, 255, 0);
    ellipse (80, 80, 70, 70);
    fill (0, 0, 255);
    ellipse (145, 145, 90, 90);
    pop ();
}

