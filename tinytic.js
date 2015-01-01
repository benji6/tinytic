var then = new Date().getTime();
var now = new Date().getTime();

module.exports.toc = function(maxDT) {
	then = now;
	now = new Date().getTime();
	var dT = now - then;
	if (maxDT !== undefined && maxDT < dT) {
		return maxDT;
	}
	return dT;
};
