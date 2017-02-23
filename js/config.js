'use strict';

(function () {
  angular.module('carlessanzmateuPortfolio')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        //controller: 'MainCtrl',
      })
    .otherwise({
      redirectTo: '/',
    });
  });
})();
