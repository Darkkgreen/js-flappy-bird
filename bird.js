function Bird() {
	this.x = 50;
	this.y = height/2;
	this.gravity = 0.5;
	this.velocity = 0;		

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 20, 20);
	}

	this.update = function() {
		if (this.velocity <= 10) {
			this.velocity += this.gravity;
		}
		this.y += this.velocity;
		this.y = constrain(this.y, 0, height);	
	}

	this.hit = function(pipe) {
		if (((this.y > 0 && this.y < pipe.y)
			|| (this.y > pipe.y + pipe.gap && this.y < height))
			&& this.x > pipe.x && this.x < pipe.x + pipe.z) {
			return true;
		}

		return false;
	}

	this.up = function() {
		this.velocity = -this.gravity*20;
	}

}