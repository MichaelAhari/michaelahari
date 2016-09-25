'use strict';

angular.module('myProfile.experience').directive('myProfileExperience', function(){
    return {
        restrict: 'EA',
        templateUrl: 'experience/experience.template.html',
        scope: true //can also take {} isolate value
    }
});