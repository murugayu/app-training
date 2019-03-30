angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mganTraining', {
    url: '/page1',
    templateUrl: 'templates/mganTraining.html',
    controller: 'mganTrainingCtrl'
  })

  .state('mganTraining2', {
    url: '/page3',
    templateUrl: 'templates/mganTraining2.html',
    controller: 'mganTraining2Ctrl'
  })

  .state('qCTOOLS', {
    url: '/page2',
    templateUrl: 'templates/qCTOOLS.html',
    controller: 'qCTOOLSCtrl'
  })

  .state('aboutUs', {
    url: '/page4',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});