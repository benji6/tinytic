#tinytic
##API
`toc`: returns time difference in milliseconds since toc was last called. Takes an optional argument which specifies the maximum time difference that will be returned.
##Example
```javascript
var tinytic = require('tinytic');

//optionally set maximum time difference in milliseconds
var maxDT = 500;

function render (dT) {
  // ...
}
 
function loop() {
  requestAnimationFrame(loop);
  var dT = tinytic.toc(maxDT);
  //if no maximum time difference is required then use as below:
  //var dT = tinytic.toc();
  render(dT);
}
 
loop(); 
```
##Description
This module is especially useful for animation.
Setting a maximum time difference can be a good idea when using requestAnimationFrame because if the browser stops requesting frames for a period (e.g. if the user has switched tabs) the time difference returned from tinytic.toc() could become very large and cause undesirable effects.
