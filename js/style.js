'use strict';

(function initialLine() {
  const line = document.getElementsByClassName('progress-bar');
  console.log("demo");


  let doSetTimeout = (i) => {
    setTimeout(function() { console.log(i); },i * 100);
  }

  for (var i = 26; i <= 100; ++i)
    doSetTimeout(i);

})();
