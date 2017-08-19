'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      //controller: 'MainCtrl',
    })
    .when('/blog', {
      templateUrl: 'blog/index.html'
    })
    .otherwise({
      redirectTo: '/',
    });

    // $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
  });
})();
