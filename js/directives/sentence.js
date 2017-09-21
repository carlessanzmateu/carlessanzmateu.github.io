'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .directive('sentence', sentence);

  function sentence() {
    return {
      restrict: 'E',
      templateUrl: '../../components/sentence.html',
    };
  }
})();
