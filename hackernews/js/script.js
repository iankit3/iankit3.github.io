var app = angular.module("myApp", [])
app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
app.controller("newsController", ['$scope', '$http', function($scope, $http) {
    $scope.myData = [];
    var S = 0,
        E = 5;
    $scope.getMore = function() {
        $http({
            method: 'GET',
            url: 'http://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
        }).success(function(data) {
            console.log(data);
            data = data.slice(S,E);
            console.log(data);
            data.forEach(function(e, i) {
                $http({
                    method: 'GET',
                    url: 'https://hacker-news.firebaseio.com/v0/item/' + e + '.json?print=pretty'
                }).success(function(d) {
                    ($scope.myData).push(d);
                })
            })
        })
        $scope.text = "Lehsoon";
        console.log($scope.myData);

        S = E;
        E += 5;
    }
}])
