'use strict';

// Declare app level module which depends on views, and components
var myProfile = angular.module('myProfile', [
  'ui.router',
  'myProfile.index',
  'myProfile.version',
  'ui.bootstrap',
   'ngAnimate',
    'duScroll',
    'ngTouch',
    'ngSanitize'
]);

myProfile.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');

  $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: '/index/index.template.html'
      });

});

myProfile.controller('appController', ['$scope', '$rootScope','$location', '$anchorScroll', '$timeout', function($scope, $rootScope, $location, $anchorScroll, $timeout){

    $timeout(function() {$scope.showLandingInfo = true;}, 800);

    $rootScope.targetMap = {
    'Intro': {'id' : 1, 'target': 'intro', 'active': false},
        'Experience':{ 'id' : 2, 'target' : 'experience', 'active': false},
        'Hackathons & Projects': {'id': 3, 'target': 'hp', 'active': false},
        'Photography': {'id' : 4, 'target' : 'photo', 'active': false},
        'Contact': {'id': 5, 'target': 'contact', 'active': false}
    };

    $rootScope.getTargetObject = function(name){
        return $rootScope.targetMap[name];
    };

    $rootScope.setTargetActive = function(name){
        //make one true, and the rest false
        var patt = new RegExp('^' + name + '$');

        Object.keys($rootScope.targetMap).forEach(function(key) {
            if (patt.test(key)) {
                $rootScope.targetMap[key]['active'] = !($rootScope.targetMap[name]['active']);
            } else {
                $rootScope.targetMap[key]['active'] = false;
            }
        });

    };

    $rootScope.setTargetActiveTrue = function(name){
        $rootScope.targetMap[name]['active'] = true;
    };

    $rootScope.setTargetActiveFalse = function(name){
        $rootScope.targetMap[name]['active'] = false;
    };

    // $scope.scrollToTarget = function(target) {
    //
    //     var targetMap = {
    //         'Intro':'intro',
    //         'Experience':'experience',
    //         'Hackathons & Projects': 'hp',
    //         'Photogrpahy': 'photography',
    //         'Contact': 'contact'
    //     };
    //     $location.hash(targetMap[target]);
    //     $anchorScroll();
    // }
}]);