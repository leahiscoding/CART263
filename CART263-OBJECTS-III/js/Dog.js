class Dog extends Animal {
  // Create a new Dog object that moves to the right
  constructor(x, y, width, height) {
    // take the x, y, width, height for the parameter
    // you can only have one constructor per class
    super(x, y, width, height);
    //call animal constructor
    // this.x = x;
    // this.y = y;
    // this.width = width;
    // this.height = height; >
    // > "this." commented it out because it was being declared in animal > it's redundant to have it here
    // > this overrides
    this.vx = Math.random() * 5 + 1;
    this.vy = 0;
    this.animalBody = document.createElement("div");
    this.isjumping = false;
  }

  //   // Move the Dog according to its velocity
  //   move() {
  //     this.x += this.vx;
  //     this.y += this.vy;
  //     //update the actual div...
  //     this.animalBody.style.left = this.x + "px";
  //     this.animalBody.style.top = this.y + "px";
  //     // css that we're manipulating in javascript
  //   }

  //   // Wrap the dog if it reaches the right edge
  //   wrap() {
  //     if (this.x > window.innerWidth) {
  //       this.x -= window.innerWidth;
  //       // wrap in the X > in-built variable (window object to find out property of the window)
  //     }
  //   }
  jump() {
    // console.log("jump");
    this.isjumping = true;
    this.vy = -27; //speed to go up
  }
  // catch bird :()
  catchBird(bird) {
    let birdEl = bird.animalBody.getBoundingClientRect();
    let dogBody = this.animalBody.getBoundingClientRect();
    let d = distance(birdEl.x, birdEl.y, dogBody.x, dogBody.y);

   if (d < birdEl.width/2){
    // this could be 50
      console.log("collision")
      console.log( bird.animalBody.style.background)   
      bird.animalBody.style.background = `orange`

    }
  }
  // only belongs in dog class because only dogs can jump
  updateJump() {
    //check if I am on the "ground" i.e. y of dog is > or equal to 150
    if (this.y < 150) {
      this.vy += 1; //speed of drop
    }
    //stop jumping
    else {
      this.isjumping = false;
      this.vy = 0; //reset y speed
      this.y = 100; //reset y value
    }
  }
  // Display the dog as a ellipse
  renderAnimal() {
    // render our div into the shape of the circle
    super.renderAnimal();
    // can call parent method as well
    // whenever super is used, it is referring to the parent
    // super in constructor > referring to constructor automatically
    this.animalBody.classList.add("animal");
    this.animalBody.style.width = this.width + "px";
    this.animalBody.style.height = this.height + "px";
    this.animalBody.style.left = this.x + "px";
    this.animalBody.style.top = this.y + "px";
    this.animalBody.style.borderRadius = this.width + "px";
    //add to the DOM
    document.getElementsByClassName("grass")[0].appendChild(this.animalBody);
  }
}


function distance(x0, y0, x1, y1) {
  return Math.hypot(x1 - x0, y1 - y0);
}