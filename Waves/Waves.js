const ww = window.innerWidth;
const wh = window.innerHeight;
let waves = [];

function setup() {
  createCanvas(ww, wh);
  for (let i = 0; i < 4; i++) {
    waves[i] = new Wave(random(wh / 10, wh / 8), random(ww / 4, ww / 2), random(10, 30));
  }
}

function draw() {
  background(100);
  translate(0, wh / 2);

  for (let x = 0; x < ww; x += 5) {
    let y = 0;

    for (let wave of waves) {
      y += wave.evaluate(x);
    }

    stroke(255);
    strokeWeight(10);
    point(x, y);
  }
}
