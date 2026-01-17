"use strict";

let counter = 0;
let qu5Sq = {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
    color: 
    { 
        r: 255,
        g: 100,
        b: 0
    }
}
let circleRadius = 60;
let circleAlpha = 255;
function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw (){
    push ();
    displaySquare(qu5Sq.x, qu5Sq.y, qu5Sq.w, qu5Sq.h, qu5Sq.color.r, qu5Sq.color.g, qu5Sq.color.b);
    mouseHover();
    fill (255,255,255,circleAlpha);
    circle(0,0,circleRadius);
    ellipseMode (CENTER);
    translate (WIDTH / 2, HEIGHT / 2);
    // move the origin to the center of the canvas
    pop ();



}

function displaySquare(x, y, w, h, r, g, b){
    fill (r, g, b);
    rect (x, y, w, h);
}
function q5Hovering ()
{
    return (mouseX > qu5Sq.x && mouseX < qu5Sq.x + qu5Sq.w && mouseY > qu5Sq.y && mouseY < qu5Sq.y + qu5Sq.h)
}
// if what you're returning is a boolean, you can just return the expression itself

function mouseHover () {
    if (q5Hovering())
    {qu5Sq.color.g += 20 ;}
    else {
        qu5Sq.color.g = 100;
    }
}

function mousePressed() {
    if (q5Hovering())
    {counter ++;
   }
    console.log (counter);
}
// ask sabine about this not working

