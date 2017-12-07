(function () {
  'use strict';

  angular.module('carlessanzmateuPortfolio', [
    'ngRoute'
  ]);
})();

(function () {
  'use strict';
  
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

(function () {
  'use strict';
  
  angular.module('carlessanzmateuPortfolio')
  .directive('footerMain', footer);

  function footer() {
    return {
      restrict: 'E',
      templateUrl: '../../components/footer.html',
    };
  }
})();

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

(function () {
  'use strict';
  
  angular.module('carlessanzmateuPortfolio')
  .directive('sentence', sentence);

  function sentence() {
    return {
      restrict: 'E',
      templateUrl: '../../components/sentence.html'
    };
  }
})();
