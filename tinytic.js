var getNow = Date.now || function() {return new Date().getTime();};

var firstTime = getNow();
var then = firstTime;
var now = then;

module.exports.toc = function(maxDT) {
	then = now;
	now = getNow();
	var dT = now - then;
	if (maxDT < dT) {
		return maxDT;
	}
	return dT;
};
module.exports.total = function(maxDT) {
	var dT = getNow() - firstTime;
	if (maxDT < dT) {
		return maxDT;
	}
	return dT;
};
module.exports.reset = function() {
	firstTime = getNow();
	then = firstTime;
	now = then;
};
