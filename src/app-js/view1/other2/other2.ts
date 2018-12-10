import * as angular from 'angular';

export const other2 = angular
  .module('other2', ['ui.router'])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('view1.other.other2', {
      url: '/other2',
      template: require('./other2.html'),
      controller: 'Other2Ctrl'
    });

    $stateProvider.state('view1.other.sink', {
      url: '/*path',
      template: ''
    });
  }])
  .run(() => {
    console.log('Running other2');
  })
  .controller('Other2Ctrl', [function () {

  }]);

export default other2;
