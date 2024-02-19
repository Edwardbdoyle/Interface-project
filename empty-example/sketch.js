let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // Draw lines between connected points
  stroke(0);
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      line(points[i].x, points[i].y, points[j].x, points[j].y);
    }
  }

  // Draw points
  fill(0);
  noStroke();
  for (let point of points) {
    ellipse(point.x, point.y, 10, 10);
  }
}

function mousePressed() {
  // Add a new point at the mouse position when clicked
  points.push(createVector(mouseX, mouseY));
}

