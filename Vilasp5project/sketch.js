let prop1, prop2;
let planeImg;
let planeX = 300;
let planeY = 250;
let frame = 1;
let spinning = false;

let mySound;

let cloud = {
  x: 0,
  y: 0,
  s: 1,

   preload: function() {
    mySound = loadSound('sound.mp3');
  },

  displayCloud: function() {
    fill('rgb(241,233,217)');
    noStroke();

    ellipse(this.x+100*this.s, this.y+100*this.s, 40*this.s, 20*this.s);
    ellipse(this.x+120*this.s, this.y+90*this.s, 40*this.s, 20*this.s);
    ellipse(this.x+130*this.s, this.y+110*this.s, 50*this.s, 30*this.s);

// moutain     
fill('#788066');
triangle(360, 130, 760, 500, -40, 500); //second mountain

//text
    stroke(255);
    strokeWeight(3);
    fill(0);
    textSize(35);
    textAlign(CENTER);
    text("Let's Travel!", width / 1.6, 70); // , this.x + 220*this.s, this.y + 70*this.s);
    
    noStroke(); 
    strokeWeight(3);
    fill(0);
    textSize(13);
    text("Click the plane to start the engine", this.x + 120*this.s, this.y + 140*this.s);
  },

  updatePosition : function() {
    this.x += 1;
    if (this.x > width){
      this.x = -150;
    }
  }
};

function preload() {
  mySound = loadSound('sound.mp3');
  // illustrator propellers + plane
  prop1 = loadImage("propellerone.png");
  prop2 = loadImage("propellertwo.png");
  planeImg = loadImage("plane.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
}


function draw() { 
  background('rgb(123, 203, 240)');

  // cloud
  cloud.displayCloud();
  cloud.updatePosition();

  // sun
  fill(255, 204, 0);
  circle(60,20,270);

  // mountain
  fill('#BED48D');
  triangle(100, 180, 500, 500, -260, 500); //first mountain

  // plane
  image(planeImg, planeX, planeY, 310, 310); 

  //  propeller spin
  // if spinning AND frameCount are true than the proppeler will create a spinning effect. 
  if (spinning && frameCount % 1 == 0) { // frameCount % 1 == 0 - speed of the propeller spin

  if (frame == 1) {
    frame = 2;
  } else {
    frame = 1;
  }

}
  // propeller placement on the plane
  let propOffsetX = -90; 
  let propOffsetY = 37;
  

  if (frame == 1) {
    image(prop1, planeX + propOffsetX, planeY + propOffsetY, 400, 400);
  } else {
    image(prop2, planeX + propOffsetX, planeY + propOffsetY, 400, 400);
  }

  // hills
  fill('rgb(42,77,42)');
  arc(0, 500, 700, 200, PI, TWO_PI);

  fill('rgb(22,104,22)');
  arc(500, 500, 700, 200, PI, TWO_PI);

  fill('rgb(86, 185, 234)');
  square(0, 500, 600);
}
function mousePressed() {
  // User interaction starts the audio 
  if (mySound.isPlaying()) {
    mySound.stop();
    spinning = false;
  } else {
    mySound.play();
    spinning = true;
  }
}
