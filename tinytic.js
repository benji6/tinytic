var Tinytic = function(maxTimeDiff) {
	this.then = new Date().getTime();
	this.now = new Date().getTime();
	this.maxTimeDiff = maxTimeDiff;
};

Tinytic.prototype.toc = function() {
	this.then = this.now;
	this.now = new Date().getTime();
	var timeDiff = this.now - this.then;
	if (this.maxTimeDiff && this.maxTimeDiff < timeDiff) {
		return this.maxTimeDiff;
	}
	return timeDiff;
};

module.exports = Tinytic;
