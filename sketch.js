var bird;
var pipes;
var counting;

function setup() {
	createCanvas(600,600);
	resetVariables();
}

function draw() {
	background(0);
	counting++;

	if (counting === 100) {
		counting = 0;
		spawnPipe();
	}
	bird.update();
	bird.show();
	
	for(var x = 0; x < pipes.length; x++) {
		if (pipes[x].outOfBound()) {
			pipes.shift();
		}

		if (bird.hit(pipes[x])) {
			resetVariables();
			break;
		}

		pipes[x].update();
		pipes[x].show();
	}
}

function keyPressed() {
	if (key == ' ') {
		bird.up();
	}
}

function spawnPipe() {
	pipes[pipes.length] = new Pipe();
}

function resetVariables() {	
	counting = 0;
	pipes = [];
	bird = new Bird();
}