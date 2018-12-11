import * as angular from 'angular';

export const myAppView1 = angular
  .module('view1', ['ui.router'])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('view1', {
      url: '/*path',
      template: require('./view1.html'),
      controller: 'View1Ctrl',
      controllerAs: 'perf'
    });
  }])
  .run(() => {
    console.log('Running AngularJS application');
  })
  .controller('View1Ctrl', ['$state', '$location', function ($state, $location) {
    const ctrl = this;

    ctrl.goToOther1 = function () {
      console.log('go to: Other 1');
      $location.path('/view1/other1');
    };

    ctrl.goToOther2 = function () {
      console.log('go to: Other 2');
      $location.path('/view1/other2');
    };
  }]);

export default myAppView1;
