var tinytic = require('./tinytic');

setInterval(function() {
  console.log(tinytic.toc(400));
}, 500);
