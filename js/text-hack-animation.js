(function() {
  'use strict';

  var HACKEDCHARSMAP = ['A','$','♡','#','/','¿','¬','«','µ','Æ','ゃ','♞','✿','♩','☑'];
  var hackHelper = {
    checkIsArrayOfElements: isArray,
    randomIntegerNumber: getRandomIntegerNumber,
  };
  window.hackAnimation = hackAnimation || {};


  function hackAnimation(settings) {
    if(!settings) {
      console.error('Hack Animation needs some settings as object to perform animation');
      console.error('------------------------- EXAMPLE -------------------------------');
      console.error('hackAnimation({ \n id:"someId", \n class:"someClass" \n});');
      return;
    }

    if(settings['id']) {
      console.log(settings.id);
    }

    if(settings['class']) {
      hackClass(settings.class);
    }
  }

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
    hackHelper.checkIsArrayOfElements(selectedDOMClass);

    var classElementsToHack = document.getElementsByClassName(selectedDOMClass);
  }

  function getRandomIntegerNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  function isArray(data) {
    var isArray = false;

    if (data.constructor === Array) {
      isArray = true;
    }

    return isArray;
  }
})();
