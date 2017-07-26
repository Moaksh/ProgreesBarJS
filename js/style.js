(function slots(document, customElements) {
  'use strict';
  const ELEMNTS = ['color','time','size'];
  const bar  = document.getElementById('progress');

  class ProgresBar extends HTMLElement {

    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/progressbar.css">
        <div class="progress">
            <div id="progress-bar"></div>
        </div>
      `;
    }

    static get observedAttributes(){
      return ELEMNTS;
    }



    attributeChangedCallback(attr,oldvalues,newvalues){

      if(attr == 'color'){
        this.color(newvalues);
      }

      if(attr ==  'time'){
        this.time(newvalues);
      }

      if(attr == 'size'){
        this.size(newvalues);
      }

    }

    size(sizeprogress){
//      this.shadowRoot.getElementById('progress-bar').style.height = sizeprogress+"px";
    }

    color(colorProgress){
      this.shadowRoot.getElementById('progress-bar').style.background = colorProgress;

    }

    time(timeProgress){
      alert(timeProgress);
      let lineBar = this.shadowRoot.getElementById('progress-bar')
      let width = 0;
      let id = setInterval(frame, timeProgress);

      function frame() {
         if (width == 100) {
           clearInterval(id);
         } else {
           width++;
           lineBar.style.width = width + '%';
         }
       }

    }

  }
  customElements.define('progress-bar', ProgresBar);
})(document, window.customElements);
