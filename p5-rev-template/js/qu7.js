let q7radius = 40;
let qcolour = {
    r: random (0, 255),
    g: random (0, 255),
    b: random (0, 255)
}

function setup (){
    createCanvas (600,600);
    background (0);
    q7colour = {
    r: random (0, 255),
    g: random (0, 255),
    b: random (0, 255)
}
}

function draw (){
   translate (q7radius/2, q7radius/2);
   // it doesn't cut off
   for (let i = 0; i < width; i += q7radius){
        for (let j = 0; j < height; j += q7radius){
            circle (i, j, q7radius);
        }
   }
   
}


function keyPressed (){
    if (keyIsPressed === true && key === ""){
    qcolour.r = random (0, 255);
    qcolour.g = random (0, 255);
    qcolour.b = random (0, 255);
    };
    console.log ("Hello, world!");
}

// color changing issue (sabine)
