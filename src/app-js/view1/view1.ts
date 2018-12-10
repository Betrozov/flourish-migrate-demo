import * as angular from 'angular';

import { StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Other1LazyModule } from '../../app/view1-lazy/other1/other1-lazy.module';
import { downgradeModule } from '@angular/upgrade/static';
import { Other2LazyModule } from '../../app/view1-lazy/other2/other2-lazy.module';
import other1 from './other1/other1';
import other2 from './other2/other2';

const other1LazyModuleFn = (extraProviders: StaticProvider[]) =>
  platformBrowserDynamic(extraProviders).bootstrapModule(Other1LazyModule);
const downgradedOther1LazyModule = downgradeModule(other1LazyModuleFn);

const other2LazyModuleFn = (extraProviders: StaticProvider[]) =>
  platformBrowserDynamic(extraProviders).bootstrapModule(Other2LazyModule);
const downgradedOther2LazyModule = downgradeModule(other2LazyModuleFn);

export const myAppView1 = angular
  // .module('view1', ['ui.router'])
  // .module('view1', ['ui.router', other1.name, other2.name])
  .module('view1', ['ui.router', downgradedOther1LazyModule, downgradedOther2LazyModule])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('view1', {
      url: '/view1',
      template: require('./view1.html'),
      controller: 'View1Ctrl',
      controllerAs: 'perf'
    });

    $stateProvider.state('view1.other', {
      url: '',
      abstract: true
    });
  }])
  .run(() => {
    console.log('Running AngularJS application');
  })
  .controller('View1Ctrl', ['$state', function ($state) {

  }]);

export default myAppView1;
