function setup() {
    createCanvas(400, 200);
    background(0);
}

var x = 0;
var y = 50;
var speed = 2;
var dir = true;
function draw() {
    let c = y;
    stroke(255);
    point(x++, y);
    if (x > width) {
        x = 0;
        background(0);
    }
    if (y == 75) {
        dir = false;
    }
    if (y == 25) {
        dir = true;
    }
    if (dir == true) {
        y++;
    } else {
        y--;
    }




}