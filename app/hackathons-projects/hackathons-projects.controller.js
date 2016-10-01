'use strict';

angular.
module('myProfile.hp').controller('hpController', ['$scope', '$sce', function($scope, $sce){

    $scope.myInterval = 9000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;

    $scope.hpItems = [
        {
            'id': 0,
            'title' : 'Hack The Burgh 2016',
            'expanded' : true,
            'lg' : 'static/hacktheburgh2016.jpg',
            'sm' : 'static/hacktheburgh2016-sm.jpg',
            'content' : $sce.trustAsHtml(
                '<br><p>In March I helped organised Edinburgh University\'s second ever hackathon, ' +
                'which we hosted at Blackrock\'s bespokely designed office in the city centre.</p>' +
                    '<p>We had over 100 hackers working on awesome projects, and sponsors including Github, Bloomberg, NCR, Craneware and JPMorgan. ' +
                    'I managed sponsorships and swag - everyone loves swag!</p>' +
                    '<p>In addition to this I also invested some time in hacker experience, and built a Github commit scraper that would add tracks to a Spotify playlist ' +
                    'based on the sentiment of each commit. Hackers could also interact with the playlist by adding their own tracks via a Slack channel.</p>')

        },
        {
            'id': 1,
            'title' : 'StacsHack 2016',
            'expanded' : false,
            'lg' : 'static/bg-4.jpg',
            'sm' : 'static/placeholder-sm.jpg',
            'content' : $sce.trustAsHtml(
                '<br><p>Did you know you can download all your Facebook Messenger data?</p><br>' +
                '<p>We discovered this at StacsHack and decided to build a bot that responds just like you would in normal conversation (well, sort of). ' +
                'We generated possible bigrams, trigrams, follow words, then selected randomly from a dictionary of possible responses. The results were interesting and funny!</p><br>' +
                '<p>I spent most of the weekend discovering that Facebook Messenger had done everything to prevent automated scraping and posting of messages.' +
                'In the end we went with a Telegram bot implementation which worked well enough for a demo.</p>')

        },
        {
            'id': 2,
            'title' : 'Code For Good 2015',
            'expanded' : false,
            'lg' : 'static/bg-5.jpg',
            'sm' : 'static/placeholder-sm.jpg',
            'content' : $sce.trustAsHtml(
                '<br><p>Visited JPMorgan\'s Glasgow office for a weekend to hack for social good for one of 3 charities</p><br>' +
                '<p>My team worked on a website and android application for a local charity called Urban Roots, to help them manage their volunteers and events, ' +
                'and to allow people to report vandalism to any of their cultivation sites.</p>')
        },
        {
            'id':3,
            'title' : 'Hack The Burgh 2015',
            'expanded' : false,
            'lg' : 'static/hacktheburgh2015.jpg',
            'sm' : 'static/placeholder-sm.jpg',
            'content' : $sce.trustAsHtml(
                '<br><p>Twilio and their abundance of API\'s</p><br>' +
                '<p>Using Twilio\'s SMS API, my friend and I built a game called \"Solve the Mystery\",' +
                ' which involved communicating with various Twilio numbers posing as characters in a plot, in order to work out who had committed the heinous act.</p><br>' +
                '<p>We used Java which I would absolutely not advise for using Twilio at a hackathon - use Javascript or Python instead!</p>')
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