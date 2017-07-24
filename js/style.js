'use strict';

(function initialLine() {

  const line = document.getElementById('progress-bar');
  const seventy = document.getElementById('seventy');
  const fifty = document.getElementById('fifty');
  const video = document.getElementById('containerForm');

  let getValue = () =>{
    fifty.addEventListener('change', setValueToLine, false);
    seventy.addEventListener('change',setValueToLine,false);
  }

  function setValueToLine() {
    switch (this.value) {
      case 'seventy':
        line.style.width ="70%";
        line.style.background = "yellow";
        break;
      case 'fifty':
        line.style.width ="50%";
        line.style.background = "orange";
        break;
      default:

    }
  }


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
          line.style.background ="rgba(0,0,0,0.0)";
          line.style.border ="0px";
          video.style.visibility ="visible"
          break;
        default:

      }
    },i * 100);
  }


  getValue()
  for (let i = 1; i <= 100; ++i)
     doSetTimeout(i);


})();
