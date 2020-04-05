class Point {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

var m = 1, b = 0;
var points = [];

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(70);

  	for (var i = 0; i < points.length; i++) {
  		fill(200);
  		noStroke();
  		ellipse(points[i].x, points[i].y, 6, 6);
  	}

  	if (points.length > 1) {
  		linearRegression();
  		drawLine();
  	}
}

function linearRegression() {
	var xSum = 0;
	var ySum = 0;

	for (var i = 0; i < points.length; i++) {
  		xSum += points[i].x;
  		ySum += points[i].y;
  	}

  	var xMean = xSum / points.length;
  	var yMean = ySum / points.length;
  	var nume = 0;
  	var denom = 0;

	for (var i = 0; i < points.length; i++) {
		nume += ((points[i].x - xMean) * (points[i].y - yMean));
		denom += ((points[i].x - xMean) * (points[i].x - xMean));
  	}

  	m = nume / denom;
  	b = yMean - (m * xMean);
}

function drawLine() {
	stroke(39, 173, 23);
	line(0, b, width, m * width + b);
}

function mouseClicked() {
	var p = new Point(mouseX, mouseY);
	points.push(p);
}