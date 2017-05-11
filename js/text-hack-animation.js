(function() {

  window.onload = function() {
    //var textsToAnimate = document.getElementsByClassName('hackAnimation');

    /*for(var i = 0; i < textsToAnimate.length; i++) {
      individualText = textsToAnimate[i].textContent;
      lettersToChange = getRandomArbitrary(1,individualText.length);
    }*/



  }
})();

(function() {
  'use strict';

  var HACKEDCHARSMAP = ['A','$','#','/','¿','¬','«','µ','Æ'];
  var hackAnimation = {
    hackIdAnimation: hackId,
    hackClassAnimation: hackClass,
  };
  window.hackAnimation = hackAnimation;

  function hackId(id) {
    var idElementToHack = document.getElementById(id);
    var unhackedText = idElementToHack.textContent;
    var textLength = unhackedText.length;
    var letterToHack = getRandomIntegerNumber(0, textLength);
    var hackedText = unhackedText.replace(unhackedText[letterToHack],
      HACKEDCHARSMAP[getRandomIntegerNumber(0, HACKEDCHARSMAP.length-1)]);

    idElementToHack.textContent = hackedText;
  }

  function hackClass(selectedDOMClass) {
    var classElementsToHack = document.getElementsByClassName(selectedDOMClass);
    console.log(classElementsToHack);
  }

  function getRandomIntegerNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
})();
