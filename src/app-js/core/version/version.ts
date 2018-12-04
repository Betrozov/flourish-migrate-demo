import { versionDirective } from './version-directive';
import { interpolateFilter } from './interpolate-filter';

export const myAppVersion = angular.module('myApp.version', [
  interpolateFilter.name,
  versionDirective.name
])

.value('version', '0.1');

export default myAppVersion;
