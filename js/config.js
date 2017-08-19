'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
    })
    .when('/blog/', {
      templateUrl: 'blog/index.html'
    })
    .otherwise({
      redirectTo: '/',
    });

    $locationProvider.html5Mode(true);
  });
})();
