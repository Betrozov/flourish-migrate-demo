import * as angular from 'angular';

export const other2 = angular
  .module('other2', ['ui.router'])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('other2', {
      url: '/*path',
      template: require('./other2.html'),
      controller: 'Other2Ctrl'
    });
  }])
  .run(() => {
    console.log('Running other2');
  })
  .controller('Other2Ctrl', [function () {

  }]);

export default other2;
