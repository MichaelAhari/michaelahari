'use strict';

angular.module('myProfile.intro').directive('myProfileIntro', function(){
    return {
        restrict: 'EA',
        templateUrl: 'intro/intro.template.html',
        scope: true //can also take {} isolate value
    }
});