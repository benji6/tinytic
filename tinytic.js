var firstTime = new Date().getTime();
var then = firstTime;
var now = then;

module.exports.toc = function(maxDT) {
	then = now;
	now = new Date().getTime();
	var dT = now - then;
	if (maxDT < dT) {
		return maxDT;
	}
	return dT;
};
module.exports.total = function(maxDT) {
	var dT = new Date().getTime() - firstTime;
	if (maxDT < dT) {
		return maxDT;
	}
	return dT;
};
module.exports.reset = function() {
	firstTime = new Date().getTime();
	then = firstTime;
	now = then;
};
