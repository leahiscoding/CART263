// source: https://editor.p5js.org/ml5/sketches/8mT3aRjUe

//ml5 global variables
let faceMesh;
let handPose;
let classifier;
let faces = [];
let hands = [];
let connections = [];
let rings = [];
let predictedWord = "";

//webcam video capture
let video;
//p5 canvas
let canvas;

// references to three page sections in HTML
let pageOneSection;
let pageTwoSection;
let pageThreeSection;

// Current HTML canvas
let currentCanvasParent = "";

//ASCII characters
const density = " .:-=+*#%@";

// ml5.facemesh
let options = {
    maxFaces: 1,
    refineLandmarks: false,
    flipped: false
};

//ml5.voice
let words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// class for each ring object
// template (saying that if I wanted to have a ring object it will have these properties)
class Ring {
    // runs whenever creating a new ring with a new ring
    // we need a constructor because that's what actually makes you a ring
    constructor(x, y, radius) {
        // store this ring's variables
        // passes the values and assign them
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = random(-10,10)
    }
    // update the ring every frame 
    updateCircle() {
        this.radius += this.speed
    }

    // draw the ring
    drawCircle() {
        noFill();
        strokeWeight (random(0,2));
        stroke (random(100),random(100),random(100),random(200));
        circle(this.x, this.y, this.radius);
    }
}

// runs before the setup and used to load models/assets
function preload(){
    // load facemesh model
    faceMesh = ml5.faceMesh(options);
    // load handpose model
    handPose = ml5.handPose();
    // load voicerecognition model
    let optionsVoice = { probabilityThreshold: 0.8 };
    classifier = ml5.soundClassifier("SpeechCommands18w", optionsVoice);
}

// runs once when the sketch starts
function setup(){
    
    //grabs pages from html
    pageOneSection = document.querySelector(".pageOne");
    pageTwoSection = document.querySelector(".pageTwo");
    pageThreeSection = document.querySelector(".pageThree")

    // p5 canvas
    canvas = createCanvas(640, 480);

    // canvas to the page one's mount point
    canvas.parent("pageOneCanvas");

    // classification for gotResults for voice recognition
    classifier.classifyStart(gotResults);

    // setting the current canvas parent 
    currentCanvasParent = "pageOneCanvas";

    // start webcam for facemesh and handpose
    video = createCapture(VIDEO);
    video.size(640, 480);
    // hiding raw html
    video.hide();

    // start face detection on the video
    faceMesh.detectStart(video, gotFaces);
    // start hand detection on the video
    handPose.detectStart(video, gotHands);
    // get built-in hand connection map
    connections = handPose.getConnections();
}

// callback for face detection result
function gotFaces(results){
    faces = results;
}

// callback for hand detection result
function gotHands(results){
    hands = results;
}

// callback for voice recognition result
function gotResults(results){
   // console.log(results);

   // save the top predicted label
    predictedWord = results[0].label;
}

// creates an ASCII-style video background
function updateAsciiBackground(){
    // if video is missing, stop
    if (!video || !video.loadedmetadata) {
        return;
    }

    // load video pixels
    video.loadPixels();
    if (!video.pixels.length) {
        return;
    }
    
    // source: https://editor.p5js.org/codingtrain/sketches/KTVfEcpWx
    // setting for the ASCII background
    const step = 9;
    background(0);
    textFont("monospace");
    textSize(step);
    textAlign(LEFT, TOP);
    noStroke();

    //loop down the image in steps
    for (let y = 0; y < video.height; y += step) {
        // loop across the image in steps
        for (let x = 0; x < video.width; x += step) {
            // calculation of pixel index in the flat pixel array
            const pixelIndex = (x + y * video.width) * 4;
            // red
            const r = video.pixels[pixelIndex + 0];
            // green
            const g = video.pixels[pixelIndex + 1];
            //blue
            const b = video.pixels[pixelIndex + 2];
            // brightness
            const avg = (r + g + b) / 3;
            // mapping brightness to a character position in density
            const charIndex = floor(map(avg, 0, 255, 0, density.length - 1));
            // get char
            const c = density.charAt(charIndex);
            // skip spaces
            if (c !== " ") {
                fill(r, g, b);
                text(c, x, y);
            }
        }
    }
}

//source: https://www.gorillasun.de/blog/an-introduction-to-perlin-noise-in-p5js-and-processing/
function drawPerlinGrid(){
    // base grid size
    const cellSize = 30;

    // remove outline for every 6th frame
    if (frameCount % 6 == 0)
    noStroke();
    background (0)

    // loop for random spacing
    for (let x = 0; x <= width; x += random(cellSize, cellSize+10)) {
        for (let y = 0; y <= height; y += random(cellSize, cellSize +10)) {
            // smooth noise
            const n = noise(x * 0.005, y * 0.005, frameCount * 0.001);
            // random values by noise
            fill(n * random(100,255), n * random(100,255), n * (random(0,255)));
            circle(x, y, random(0,10));
        }
    }
}

// moves the canvas to a different HTML container if needed
function showCanvasIn(parentId){
    if (currentCanvasParent !== parentId) {
        //re-parent the canvas in the DOM
        canvas.parent(parentId);
        currentCanvasParent = parentId;
    }
}

// draws the handpose on button two
function drawHandpose(){
    // ASCII background
    updateAsciiBackground();

    // source: https://editor.p5js.org/ml5/sketches/fnboooD-K
    // loop through each detected hand
    for (let i = 0; i < hands.length; i++) {
        // current hand
        let hand = hands[i];
        
        // loop through all hand connections
        for (let j = 0; j < connections.length; j++) {
            // first point index in this connection
            let pointAIndex = connections[j][0];
            // second point index in this connection
            let pointBIndex = connections[j][1];
            // actual keypoint object for point A 
            let pointA = hand.keypoints[pointAIndex];
            // actual keypoint object for point B
            let pointB = hand.keypoints[pointBIndex];

            // random line colour
            stroke(random(255), random(255), random(255), 220);
            // line thickness
            strokeWeight(2);
            // line between the two points (connecting the dots)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    // loop through each detected hand again
    for (let i = 0; i < hands.length; i++) {
        // current hand
        let hand = hands[i];
        // loop through each keypoint in the hand
        for (let j = 0; j < hand.keypoints.length; j++) {
            // current keypoint
            let keypoint = hand.keypoints[j];
            // random fill for the dot
            fill(random(255), random(255), random(255), 220);
            // no outline
            noStroke();
            // draw the keypoint as a circle
            circle(keypoint.x, keypoint.y, 10);
        }
    }
}

// draws the voice reaction rings on button three
function voiceReaction(){

    // ring source: https://khamilton.co.uk/posts/infinite-circle-ripple
    // if predicted word is not nothing
    if (predictedWord !== "" ){
        //console.log(predictedWord);
        // and if the frame count is 30 (every 30 frames) > add a new ring
        if (frameCount % 100 === 0){
            // create a ring at a random position
            // rings is an array
            rings.push(new Ring(random(0, width), random(0, height), random(-5, 1)));
        }

        // go through every ring
        rings.forEach((ring) => {
            // update the ring's size
            ring.updateCircle();
            // draw that ring
            ring.drawCircle();
        });
    }
}

// runs every frame
function draw(){
    // if one page is visible
    if (pageOneSection && pageOneSection.style.display !== "none") {
        console.log("hello")
        // show canvas in page one canvas
        showCanvasIn("pageOneCanvas");
        // live video drawing
        image(video, 0, 0, width, height);
        // draw the dots
        drawPerlinGrid();

        // loop through all detected faces
        for (let i = 0; i < faces.length; i ++) {
            // current face
            let face = faces[i];

            // if this face has no keypoints, skip it
            if (!face.keypoints) {
                continue;
            }
            // random fill for face dots
            fill(random(100,255), random(100,255), random(100,255), random(175,255));
            noStroke();

            // loop through every face landmark
            for (let j = 0; j < face.keypoints.length; j ++) {
                // current point
                let point = face.keypoints[j];
                // draw each landmark as a small circle
                circle(point.x, point.y, random(1,6));
            }
        }
        // stop here so other page sections do not draw this frame
        return;
    }

    // if page two section display and page two section is not none
    if (pageTwoSection && pageTwoSection.style.display !== "none") {
        // show page two canvas
        showCanvasIn("pageTwoCanvas");
        // draw hand pose
        drawHandpose();
        // stop draw here
        return;
    }

    
    // if page three section display and page three section is not none
    if(pageThreeSection && pageThreeSection.style.display !== "none"){
        // show canvas in page three
        showCanvasIn("pageThreeCanvas");
        //console.log(pageThreeSection);
        // draw ripple visualization accordingly
        voiceReaction();
        return;
    }

    // no detail page but canvas > clear the canvas
    if (canvas) {
        clear();
    }

}
