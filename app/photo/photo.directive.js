'use strict';

angular.module('myProfile.photo').directive('myProfilePhoto', function(){
    return {
        restrict: 'EA',
        templateUrl: 'photo/photo.template.html',
        scope: true //can also take {} isolate value
    }
});