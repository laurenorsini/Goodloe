var goodloeApp = angular.module('goodloeApp', ['ngRoute', 'deckControllers', "defaultController"]);

goodloeApp.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider.when('/deck/:deckId', {
           templateUrl: "views/deck.html",
           controller: "DeckController"
        })
            .when('/', {
                templateUrl: "views/default.html",
                controller: "DefaultController"
            })
            .when('/decks', {
                templateUrl: "views/decklist.html",
                controller: "DeckListController"
            })
        .otherwise({
                redirectTo: '/'
            });
    }
]);

var defaultController = angular.module('defaultController', []);

defaultController.controller('DefaultController', function($scope)
{
    var aDate = new Date(jQuery.now());
    $scope.Date =  aDate.toUTCString();
});