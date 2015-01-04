var getNow = Date.now || function() {return new Date().getTime();};

var time0 = getNow(),
	then = time0,
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
	var dT = getNow() - time0;
	if (maxDT < dT) {
		return maxDT;
	}
	return dT;
};
module.exports.reset = function() {
	time0 = then = now = getNow();
};
