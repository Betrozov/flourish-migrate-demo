import * as angular from 'angular';

export const myAppView1 = angular
  .module('view1', ['ui.router'])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('view1', {
      url: '/view1',
      template: require('./view1.html'),
      controller: 'View1Ctrl'
    });
  }])
  .run(($rootScope) => {
    console.log('Running AngularJS application');

    $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
      console.log('$stateChangeStart', toState, toParams);
    });
  })
  .controller('View1Ctrl', [function () {

  }]);

export default myAppView1;
