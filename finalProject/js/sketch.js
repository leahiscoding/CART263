// source: https://editor.p5js.org/ml5/sketches/8mT3aRjUe

let faceMesh;
let faces = [];
let video;
let canvas;

let options = {
    maxFaces: 1,
    refineLandmarks: false,
    flipped: false
};

function preload(){
    faceMesh = ml5.faceMesh(options);
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.parent("pageOneCanvas");
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    faceMesh.detectStart(video, gotFaces);
}

function gotFaces(results){
    faces = results;
}

function drawPerlinGrid(){
    const cellSize = 24;
    if (frameCount % 3 == 0)
    noStroke();
    background (0)
    for (let x = 0; x <= width; x += random(cellSize, cellSize+25)) {
        for (let y = 0; y <= height; y += random(cellSize, cellSize +25)) {
            const n = noise(x * 0.005, y * 0.005, frameCount * 0.01);
            fill(n * random(100,255), n * random(100,255), n * (random(100,255)));
            circle(x, y, 4);
        }
    }
}

function draw(){

    if (window.currentSketchMode !== "facemesh") {
        clear();
        return;
    }

    image(video, 0, 0, width, height);
    drawPerlinGrid();

    for (let i = 0; i < faces.length; i ++) {
        let face = faces[i];

        if (!face.keypoints) {
            continue;
        }

        fill(random(100,255), random(100,255), random(100,255), random(175,255));
        noStroke();

        for (let j = 0; j < face.keypoints.length; j ++) {
            let point = face.keypoints[j];
            circle(point.x, point.y, random(1,6));
        }
    }
}
