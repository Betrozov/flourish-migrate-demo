import * as angular from 'angular';

export const other1 = angular
  .module('other1', ['ui.router'])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('view1.other.other1', {
      url: '/other1',
      template: require('./other1.html'),
      controller: 'Other1Ctrl'
    });

    $stateProvider.state('view1.other.sink1', {
      url: '/*path',
      template: ''
    });
  }])
  .run(() => {
    console.log('Running other1');
  })
  .controller('Other1Ctrl', [function () {
    const ctrl = this;
    ctrl.$onInit = function () {
      console.log(555555555555555);
    };

    ctrl.$onDestroy = function () {
      console.log(666666666666666);
    };
  }]);

export default other1;
