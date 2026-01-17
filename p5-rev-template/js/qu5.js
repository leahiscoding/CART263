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
        g: 165,
        b: 0
    }
}

function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw (){
    displaySquare(qu5Sq.x, qu5Sq.y, qu5Sq.w, qu5Sq.h, qu5Sq.color.r, qu5Sq.color.g, qu5Sq.color.b);
}

function displaySquare(x, y, w, h, r, g, b){
    fill (r, g, b);
    rect (x, y, w, h);
    if (mousePressed){
        counter++;
    if (mouse){

    }
    }
}