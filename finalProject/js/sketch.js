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

function draw(){

    if (window.currentSketchMode !== "facemesh") {
        clear();
        return;
    }
    image(video, 0, 0, width, height);

    for (let i = 0; i < faces.length; i ++) {
        let face = faces[i];

        if (!face.keypoints) {
            continue;
        }
        background(random(0,10));
        fill(random(100,255), random(100,255), random(100,255), random(175,255));
        noStroke();

        for (let j = 0; j < face.keypoints.length; j ++) {
            let point = face.keypoints[j];
            circle(point.x, point.y, random(1,6));
        }
    }
}
