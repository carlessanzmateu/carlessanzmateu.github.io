!function(){"use strict";angular.module("carlessanzmateuPortfolio",["ngRoute"])}(),function(){"use strict";angular.module("carlessanzmateuPortfolio").config(function(t,e){t.when("/",{templateUrl:"views/main.html"}).when("/blog/",{templateUrl:"blog/index.html"}).otherwise({redirectTo:"/"}),e.html5Mode(!0)})}(),function(){"use strict";angular.module("carlessanzmateuPortfolio").directive("bio",function(){return{restrict:"E",templateUrl:"../../components/bio.html"}})}(),function(){"use strict";angular.module("carlessanzmateuPortfolio").directive("blog",function(){return{restrict:"E",templateUrl:"../../components/blog.html"}})}(),function(){"use strict";angular.module("carlessanzmateuPortfolio").directive("footerMain",function(){return{restrict:"E",templateUrl:"../../components/footer.html"}})}(),function(){"use strict";angular.module("carlessanzmateuPortfolio").directive("mainHeader",function(){return{restrict:"E",templateUrl:"../../components/main-header.html"}})}(),function(){"use strict";angular.module("carlessanzmateuPortfolio").directive("sentence",function(){return{restrict:"E",templateUrl:"../../components/sentence.html"}})}();