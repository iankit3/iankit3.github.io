angular.module("myApp",[])
       
 

 .controller("newsController",['$scope','$http', function($scope,$http){
 
 $scope.myData = [];   

  $http({
     method:'GET',
     url:'http://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
  }).success(function(data){
    $scope.Y_CROS = true;
    console.log(data);
    data = data.splice(0,10);
    console.log(data);
    data.forEach(function(e,i){
          $http({
             method:'GET',
             url:'https://hacker-news.firebaseio.com/v0/item/'+ e +'.json?print=pretty'
           }).success(function(d){
               ($scope.myData).push(d);
             })
     })   
 })   
          $scope.text = "Lehsoon";
          console.log($scope.myData);
       }])
