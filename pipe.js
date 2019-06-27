function Pipe() {
	this.y = random(100, height-100);
	this.gap = 120;
	this.z = 50;
	this.x = width;
	this.speed = 2;

	this.show = function() {
		fill(255);
		rect(this.x, 0, this.z, this.y);
		fill(255);
		rect(this.x, this.y+this.gap, this.z, height-this.y-this.gap);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.outOfBound = function() {
		if (this.x > width + this.z || this.x < 0 - this.z) {
			return true;
		}
		return false;
	}
}