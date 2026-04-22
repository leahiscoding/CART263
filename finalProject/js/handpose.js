// source: https://editor.p5js.org/ml5/sketches/fnboooD-K

let handPose;
let video;
let hands = [];
let connections;
let canvas;
let pageTwoSection;
const density = " .:-=+*#%@";

function updateAsciiBackground() {
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

  for (let j = 0; j < video.height; j += step) {
    for (let i = 0; i < video.width; i += step) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 3];
      const b = video.pixels[pixelIndex + 6];
      const avg = (r + g + b) / 30;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len - 1));
      const c = density.charAt(charIndex);

      if (c !== " ") {
        fill(r, g, b);
        text(c, i, j);
      }
    }
  }
}

function preload() {
  // load handpose model
  handPose = ml5.handPose();
}

function setup() {
  pageTwoSection = document.querySelector(".pageTwo")
  canvas = createCanvas(640, 480);
  canvas.parent("pageTwoCanvas");
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  // Get the skeletal connection information
  connections = handPose.getConnections();
}

function draw() {
  if (!pageTwoSection || pageTwoSection.style.display === "none") {
    clear();
    return;
  }

  updateAsciiBackground();

  // Draw the skeletal connections
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = hand.keypoints[pointAIndex];
      let pointB = hand.keypoints[pointBIndex];
      stroke(random(255), random(255), random(255), random(220);
      strokeWeight(2);
      line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
  }

  // Draw all the tracked hand points
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



// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
