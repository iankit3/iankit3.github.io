'use strict';

/* Controllers */
angular.module('imdbApp',[])
.controller('ListCtrl' ,['$scope','$http',function($scope,$http){

  
  $scope.inTheaters = function(d){
  	return d.date === "In Theaters Now";
  }

  $scope.filt = function(d){

  	
  }
  
/*
  $scope.res = function foo(input){
  	 if ($scope.list.movies.directors.name === input) 
  	 	return movies ; 
  	 return foo;
  }
  */

  $scope.cus_order = function (){
  	return $scope.list.movie.rating;
  }

  $http({
    method:'GET',
    url:'list2.json' /*'http://www.myapifilms.com/imdb/inTheaters'*/
  }).success(function(data){
    $scope.list = data;
  }).error(function (error){
      console.error(error);
  });
}])