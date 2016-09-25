'use strict';

angular.
module('myProfile.hp').controller('hpController', ['$scope', '$rootScope', function($scope, $rootScope){

    $scope.hpItems = [
        {
            'title' : 'Hack The Burgh 2016',
            'expanded' : true,
            'background' : 'url("static/hackathons-bg.jpg")',
            'content' : 'Here is some stuff about hack the burgh 2016'
        },
        {
            'title' : 'StacsHack 2016',
            'expanded' : false,
            'background' : 'url("static/IMG_0336-min.png")',
            'content' : 'Here is some stuff about hack the burgh 2016'
        },
        {
            'title' : 'Code For Good 2015',
            'expanded' : false,
            'background' : 'url("static/IMG_0337-min.JPG")',
            'content' : 'Here is some stuff about hack the burgh 2016'
        },
        {
            'title' : 'Hack The Burgh 2015',
            'expanded' : false,
            'background' : 'url("static/hacktheburgh2015.jpg")',
            'content' : 'Here is some stuff about hack the burgh 2016'
        }
    ];

    $scope.setExpanded = function(item){
        for (var i=0;i<$scope.hpItems.length;i++) {
            if (item['title'] === $scope.hpItems[i]['title']){
                $scope.hpItems[i]['expanded'] = true;
            } else {
                $scope.hpItems[i]['expanded'] = false;

            }
        }
    };

}]);