'use strict';

angular.module('myProfile.version', [
  'myProfile.version.interpolate-filter',
  'myProfile.version.version-directive'
])

.value('version', '0.1');
