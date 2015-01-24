'use strict';

angular.module('angularPlusGoApp', ['ui.router'])
.config(function ($stateProvider, $locationProvider, $httpProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('root', {
      abstract: true,
      views: {
        '@': {
        },
        'navbar@': { templateUrl: 'views/partials/navbar.html' },
        'footer@': { templateUrl: 'views/partials/footer.html' }
      }
    })
    .state('main', {
      url: '/',
      parent: 'root',
      views: {
        '@': { templateUrl: 'views/main.html', controller: 'MainCtrl' }
      }
    })
    .state('about', {
      url: '/about',
      parent: 'root',
      views: {
        '@': { templateUrl: 'views/about.html', controller: 'AboutCtrl' }
      }
    })
    .state('contact', {
      url: '/contact',
      parent: 'root',
      views: {
        '@': { templateUrl: 'views/contact.html', controller: 'ContactCtrl' }
      }
    })
    .state('signin', {
      url: '/signin',
      parent: 'root',
      views: {
        '@': { templateUrl: 'views/signin.html', controller: 'SigninCtrl' }
      }
    })
    .state('signup', {
      url: '/signup',
      parent: 'root',
      views: {
        '@': { templateUrl: 'views/signup.html', controller: 'SignupCtrl' }
      }
    });
})

.run(['$state', '$stateParams',
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
}]);
