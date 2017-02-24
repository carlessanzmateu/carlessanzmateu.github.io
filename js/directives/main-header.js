'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .directive('mainHeader', mainHeader);

  function mainHeader() {
    return {
      restrict: 'E',
      template: '<h1>Currently on Development :P</h1>',
    };
  }
})();
