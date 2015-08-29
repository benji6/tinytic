# tinytic

## Description
Tiny and easy to use module for getting time differences, especially useful for animation.

## Installation

Either use npm:

```bash
npm i -S tinytic
```

Or include minified file in your project to attach `tinytic` to the window.

## API
`toc`: returns the time difference in milliseconds since toc was last called. Takes an optional argument which specifies the maximum time difference that will be returned. This is a good idea when using requestAnimationFrame as the browser may stop requesting frames (e.g. if the user has switched tabs) and produce an excessive time difference.

`total`: returns the total time elapsed either since tinytic was first loaded or since `reset` was last called.

`reset`: sets tinytic to its initialized state resetting all timers.

## Example

```javascript
var tinytic = require('tinytic');

//optionally set maximum time difference in milliseconds
var maxDT = 500;

function render (dT, totalTimeElapsed) {
  // ...
}

function loop() {
  requestAnimationFrame(loop);
  var dT = tinytic.toc(maxDT);
  //if no maximum time difference is required then use as below:
  //var dT = tinytic.toc();

  //if total time elapsed is required use as below:
  var totalTimeElapsed = tinytic.total();
  render(dT, totalTimeElapsed);
}

loop();
```

## Implementation
In order of preference tinytic measures time using `performance.now`, `Date.now`, or `new Date().getTime`, so it should work in virtually any JS environment.
