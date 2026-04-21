// switched to ml5.js + p5.js

// // repo: https://github.com/tensorflow/tfjs-models/tree/master/handpose

// import '@mediapipe/face_detection';
// import '@tensorflow/tfjs-core';
// // Register WebGL backend.
// import '@tensorflow/tfjs-backend-webgl';
// import * as faceDetection from '@tensorflow-models/face-detection';

// const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
// const detectorConfig = {
//   runtime: 'mediapipe',
//   solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_detection',
//                 // or 'base/node_modules/@mediapipe/face_detection' in npm.
// };
// detector = await faceDetection.createDetector(model, detectorConfig);

// const estimationConfig = {flipHorizontal: false};
// const faces = await detector.estimateFaces(image, estimationConfig);

// async function main() {
//   // Load the MediaPipe handpose model.
//   const model = await handpose.load();
//   // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain a
//   // hand prediction from the MediaPipe graph.
//   const predictions = await model.estimateHands(document.querySelector("video"));
//   if (predictions.length > 0) {
//     /*
//     `predictions` is an array of objects describing each detected hand, for example:
//     [
//       {
//         handInViewConfidence: 1, // The probability of a hand being present.
//         boundingBox: { // The bounding box surrounding the hand.
//           topLeft: [162.91, -17.42],
//           bottomRight: [548.56, 368.23],
//         },
//         landmarks: [ // The 3D coordinates of each hand landmark.
//           [472.52, 298.59, 0.00],
//           [412.80, 315.64, -6.18],
//           ...
//         ],
//         annotations: { // Semantic groupings of the `landmarks` coordinates.
//           thumb: [
//             [412.80, 315.64, -6.18]
//             [350.02, 298.38, -7.14],
//             ...
//           ],
//           ...
//         }
//       }
//     ]
//     */

//     for (let i = 0; i < predictions.length; i++) {
//       const keypoints = predictions[i].landmarks;

//       // Log hand keypoints.
//       for (let i = 0; i < keypoints.length; i++) {
//         const [x, y, z] = keypoints[i];
//         console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
//       }
//     }
//   }
// }
// main();