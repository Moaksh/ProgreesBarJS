'use strict';

(function initialLine() {
  const line = document.getElementById('progress-bar');
  console.log(line.style.width);

  let doSetTimeout = (i) => {
    setTimeout(function() {
      line.style.width = i+"%";
      switch (i) {
        case 25:
          line.style.background = "orange";
          break;
        case 50:
          line.style.background = "yellow";
          break;
        case 75:
          line.style.background = "blue";
          break;
        case 100:
          line.style.background ="rgba(0,0,0,0.0)"
          line.style.border ="0px";
          break;
        default:

      }
    },i * 100);
  }

  for (let i = 1; i <= 100; ++i)

     doSetTimeout(i);


})();
