'use strict';

angular.module('myProfile.contact').directive('myProfileContact', function(){
    return {
        restrict: 'EA',
        templateUrl: 'contact/contact.template.html',
        scope: true //can also take {} isolate value
    }
});