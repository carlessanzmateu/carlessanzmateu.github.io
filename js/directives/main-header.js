(function () {
  'use strict';
  
  angular.module('carlessanzmateuPortfolio')
  .directive('mainHeader', mainHeader);

  function mainHeader() {
    return {
      restrict: 'E',
      templateUrl: '../../components/main-header.html',
    };
  }
})();
