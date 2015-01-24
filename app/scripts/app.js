'use strict';

angular.module('myApp', ['ui.router'])
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
    });
});
