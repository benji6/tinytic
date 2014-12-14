var then = new Date().getTime();
var now = new Date().getTime();

var lap = function() {
	then = now;
	now = new Date().getTime();
	return now - then;
};

exports.toc = lap;
