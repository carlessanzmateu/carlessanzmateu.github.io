(function () {
  'use strict';
  
  angular.module('carlessanzmateuPortfolio')
  .directive('footerMain', footer);

  function footer() {
    return {
      restrict: 'E',
      templateUrl: '../components/footer/footer.html',
    };
  }
})();
