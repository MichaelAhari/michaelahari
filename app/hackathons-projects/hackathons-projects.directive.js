'use strict';

angular.module('myProfile.hp').directive('myProfileHp', function(){
    return {
        restrict: 'EA',
        templateUrl: 'hackathons-projects/hackathons-projects.template.html',
        scope: true //can also take {} isolate value
    }
});