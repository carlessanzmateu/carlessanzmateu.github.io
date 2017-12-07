(function () {
  'use strict';
  
  angular.module('carlessanzmateuPortfolio')
  .directive('blog', blog);

  function blog() {
    return {
      restrict: 'E',
      templateUrl: '../../components/blog.html',
    };
  }
})();
