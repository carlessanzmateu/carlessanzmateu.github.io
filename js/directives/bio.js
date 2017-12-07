(function () {
  'use strict';
  
  angular.module('carlessanzmateuPortfolio')
  .directive('bio', bio);

  function bio() {
    return {
      restrict: 'E',
      templateUrl: '../../components/bio.html',
    };
  }
})();
