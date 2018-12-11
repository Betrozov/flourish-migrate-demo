import { myAppVersion } from '../core/version/version';

export const myAppView2 = angular
  .module('view2', ['ui.router', myAppVersion.name])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('view2', {
      url: '/*path',
      template: require('./view2.html'),
      controller: 'View2Ctrl'
    });
  }])
  .run(($rootScope) => {
    console.log('Running AngularJS application 222222222222222');

    $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
      console.log('$stateChangeStart', toState, toParams);
    });
  })
  .controller('View2Ctrl', [function () {

  }]);

export default myAppView2;
