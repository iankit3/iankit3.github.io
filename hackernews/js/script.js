var app = angular.module("myApp", [])
app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

function epocToDate(epoc){
 var myDate = new Date(epoc*1000);
 var dateF = (myDate.toLocaleString()).slice(0,4).replace('/','-') 
             + (myDate.toLocaleString()).slice(10,15) 
             +" "+ (myDate.toLocaleString()).slice(19,22) 
     myDate =  myDate.toLocaleString();
   return dateF   
}
app.controller("newsController", ['$scope', '$http', function($scope, $http) {
    $scope.myData = [];
    $scope.showUrl = function(index,e){
      if(e.show)e.show = false;
      else e.show = true;
    }

    var S = 0,
        E = 5;
    $scope.getMore = function() {
        $http({
            method: 'GET',
            url: 'http://hacker-news.firebaseio.com/v0/topstories.json'
        }).success(function(data) {
            console.log(data);
            data = data.slice(S,E);
            console.log(data);
            data.forEach(function(e, i) {
                $http({
                    method: 'GET',
                    url: 'https://hacker-news.firebaseio.com/v0/item/' + e + '.json'
                }).success(function(d) {
                    d.show = false;
                    d.time = epocToDate(d.time);
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
