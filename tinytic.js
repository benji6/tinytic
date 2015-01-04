var getNow = Date.now || function() {return new Date().getTime();};

var t0 = getNow(),
	then = t0,
	now = then;

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
	var dT = getNow() - t0;
	if (maxDT < dT) {
		return maxDT;
	}
	return dT;
};
module.exports.reset = function() {
	t0 = then = now = getNow();
};
