#tinytic
##API
`toc` : returns time difference since toc was last called
##Example
```
var tinytic = require('tinytic');
 
function render (dT) {
// ...
}
 
function loop() {
requestAnimationFrame(loop);
var dT = tinytic.toc();
render(dT);
}
 
loop(); 
```
