'use strict';

angular.
module('myProfile.photo').controller('photoController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){

    // access_token=1993155397.ee0a964.245b5eecbda74e9baf201b1abff7e556


    console.log(ENV['INSTAGRAM_TOKEN']);
    $scope.getLatestPhoto = function(){

        var token = ENV['INSTAGRAM_TOKEN']

    }
}]);
