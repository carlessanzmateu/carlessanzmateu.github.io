'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .directive('mainHeader', mainHeader);

  function mainHeader() {
    return {
      restrict: 'E',
      templateUrl: '../../components/main-header.html',
      controller: 'mainHeaderController',
    };
  }
})();
