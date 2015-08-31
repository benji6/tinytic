var tinytic = (function() {
  var getNow = typeof performance === "object" && typeof performance.now === "function" && performance.now.bind(performance) ||
    Date.now ||
    function () {
			return new Date().getTime();
		};

  var t0 = getNow();
  var then = t0;
  var now = then;

  var toc = function (maxDT) {
    then = now;
    now = getNow();
    var dT = now - then;
		return maxDT < dT ? maxDT : dT;
  };

  var total = function (maxDT) {
    var dT = getNow() - t0;
		return maxDT < dT ? maxDT : dT;
  };

  var reset = function () {
    t0 = then = now = getNow();
  };

  return {
    toc: toc,
    total: total,
    reset: reset
  };
}());

if (typeof module === 'object') {
  module.exports = tinytic;
}
