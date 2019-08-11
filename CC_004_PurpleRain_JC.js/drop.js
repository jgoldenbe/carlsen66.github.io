// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI
let wind = 0;

function Drop() {
  this.x = random(-20, width+200);
  this.y = random(-500, -50);
  this.z = random(0, 10);
  this.len = map(this.z, 0, 10, 10, 15);
  this.yspeed = map(this.z, 0, 10, 10, 20);
  this.force = 0;


  this.fall = function() {
    if(random(100) < 0.005) {
      wind = random(-0.3,0.1);
    }
    this.force = this.force + wind;

    this.y = this.y + this.yspeed;
    this.x = this.x + this.force;

    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.x = random(-20, width+200);
      this.force = 0;
      this.yspeed = map(this.z, 0, 20, 10, 20);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x-this.force, this.y, this.x, this.y+this.len);
  }
}
