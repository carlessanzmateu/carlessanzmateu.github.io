'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .directive('footerMain', footer);

  function footer() {
    return {
      restrict: 'E',
      templateUrl: '../../components/footer.html',
    };
  }
})();
