'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .directive('blog', blog);

  function blog() {
    return {
      restrict: 'E',
      templateUrl: '../../components/blog.html',
    };
  }
})();
