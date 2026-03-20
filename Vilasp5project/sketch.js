let prop1, prop2;
let planeImg;
let planeX = 300;
let planeY = 250;
let frame = 1;
let spinning = false;

let cloud = {
  x: 0,
  y: 0,
  s: 1,

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
    textSize(30);
    textAlign(CENTER);
    text("Let's Travel!", this.x + 220*this.s, this.y + 70*this.s);
    
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

// illustrator propellers + plane
function preload() {
  prop1 = loadImage("propellerone.png");
  prop2 = loadImage("propellertwo.png");
  planeImg = loadImage("plane.png");
}


function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
}

// click to spin
function mousePressed() {
  if (spinning == false) {
    spinning = true;
  } else {
    spinning = false;
  }
}


function draw() {
  background(0, 200, 255);

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
  image(planeImg, planeX, planeY, 150, 150);

  //  propeller spin
  if (spinning && frameCount % 2 == 0) {

  if (frame == 1) {
    frame = 2;
  } else {
    frame = 1;
  }

}

  // propeller placement on the plane
  let propOffsetX = -37; 
  let propOffsetY = 14;
  

  if (frame == 1) {
    image(prop1, planeX + propOffsetX, planeY + propOffsetY, 100, 100);
  } else {
    image(prop2, planeX + propOffsetX, planeY + propOffsetY, 100, 100);
  }

   

  // hills
  fill('rgb(42,77,42)');
  arc(0, 500, 700, 200, PI, TWO_PI);

  fill('rgb(22,104,22)');
  arc(500, 500, 700, 200, PI, TWO_PI);

}