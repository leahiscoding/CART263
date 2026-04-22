// source: https://editor.p5js.org/ml5/sketches/8mT3aRjUe

let faceMesh;
let handPose;
let faces = [];
let hands = [];
let connections = [];
let video;
let canvas;
let pageOneSection;
let pageTwoSection;
let currentCanvasParent = "";
const density = " .:-=+*#%@";

let options = {
    maxFaces: 1,
    refineLandmarks: false,
    flipped: false
};

function preload(){
    // load facemesh model
    faceMesh = ml5.faceMesh(options);
    handPose = ml5.handPose();
}

function setup(){
    pageOneSection = document.querySelector(".pageOne");
    pageTwoSection = document.querySelector(".pageTwo");
    canvas = createCanvas(640, 480);
    canvas.parent("pageOneCanvas");
    currentCanvasParent = "pageOneCanvas";
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    faceMesh.detectStart(video, gotFaces);
    handPose.detectStart(video, gotHands);
    connections = handPose.getConnections();
}

function gotFaces(results){
    faces = results;
}

function gotHands(results){
    hands = results;
}

function updateAsciiBackground(){
    if (!video || !video.loadedmetadata) {
        return;
    }

    video.loadPixels();
    if (!video.pixels.length) {
        return;
    }

    const step = 8;
    background(0);
    textFont("monospace");
    textSize(step);
    textAlign(LEFT, TOP);
    noStroke();

    for (let y = 0; y < video.height; y += step) {
        for (let x = 0; x < video.width; x += step) {
            const pixelIndex = (x + y * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const charIndex = floor(map(avg, 0, 255, 0, density.length - 1));
            const c = density.charAt(charIndex);
            if (c !== " ") {
                fill(r, g, b);
                text(c, x, y);
            }
        }
    }
}

function drawPerlinGrid(){
    const cellSize = 24;
    if (frameCount % 6 == 0)
    noStroke();
    background (0)
    for (let x = 0; x <= width; x += random(cellSize, cellSize+25)) {
        for (let y = 0; y <= height; y += random(cellSize, cellSize +25)) {
            const n = noise(x * 0.005, y * 0.005, frameCount * 0.01);
            fill(n * random(100,255), n * random(100,255), n * (random(100,255)));
            circle(x, y, random(0,10));
        }
    }
}

function showCanvasIn(parentId){
    if (currentCanvasParent !== parentId) {
        canvas.parent(parentId);
        currentCanvasParent = parentId;
    }
}

function drawHandpose(){
    updateAsciiBackground();

    for (let i = 0; i < hands.length; i++) {
        let hand = hands[i];

        for (let j = 0; j < connections.length; j++) {
            let pointAIndex = connections[j][0];
            let pointBIndex = connections[j][1];
            let pointA = hand.keypoints[pointAIndex];
            let pointB = hand.keypoints[pointBIndex];
            stroke(random(255), random(255), random(255), 220);
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    for (let i = 0; i < hands.length; i++) {
        let hand = hands[i];

        for (let j = 0; j < hand.keypoints.length; j++) {
            let keypoint = hand.keypoints[j];
            fill(random(255), random(255), random(255), 220);
            noStroke();
            circle(keypoint.x, keypoint.y, 10);
        }
    }
}

function draw(){
    if (pageOneSection && pageOneSection.style.display !== "none") {
        showCanvasIn("pageOneCanvas");
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
        return;
    }

    if (pageTwoSection && pageTwoSection.style.display !== "none") {
        showCanvasIn("pageTwoCanvas");
        drawHandpose();
        return;
    }

    if (canvas) {
        clear();
    }
}
