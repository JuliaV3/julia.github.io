let angle = 1;
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

    stroke(255);
    strokeWeight(3);
    fill(0);
    textSize(30);
    text("Let's Travel!", this.x + 120*this.s, this.y + 70*this.s);
    noStroke(); 
  },

  updatePosition : function() {
    this.x += 1;
    if (this.x > width){
      this.x = -150;
    }
  }
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 200, 255);

  cloud.displayCloud();
  cloud.updatePosition();

  fill(255, 204, 0);
  circle(60,20,270);//sun


 //moutains
//second mountain
  fill('#788066');
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);

  
//first mountain
  fill('#BED48D');
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);

  //plane
  fill(200);
  circle(360,180,80);//large
  
  fill(220);
  circle(360,180,40); //small
  
 

  //propeller
  fill('white');
  ellipse(360, 130, 10, 80);//top
  ellipse(360, 220, 10, 80);//down
  ellipse(430, 180, 120, 20);//right
  ellipse(290, 180, 120, 20);//left
  
  

  //hills
  fill('rgb(42,77,42)'); //left hill
  arc(0, 500, 700, 200, PI, TWO_PI);
  fill('rgb(22,104,22)'); //right hill
  arc(500, 500, 700, 200, PI, TWO_PI);

 }

