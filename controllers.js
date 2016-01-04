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
    url:/*'list2.json'*/  /*'http://www.myapifilms.com/imdb/inTheaters'*/https://onedrive.live.com/redir?resid=F558F229D48C3283!12992&authkey=!AJy_lCppGLubzOE&ithint=file%2cjson
  }).success(function(data){
    $scope.list = data;
  }).error(function (error){
      console.error(error);
  });
}])
