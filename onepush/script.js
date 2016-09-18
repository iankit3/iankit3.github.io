var app = angular.module("app", []);
app.factory('utilfactory', ['$http', function ($http) {
	var user = {};
	user.getData = function (url) {
		promise = $http({
			method: 'get',
			url: url,
            //headers: header
        });
		promise.success(function (response) {
			return response;
		});
		promise.error(function (response) {
			return response;
		});
		return promise;
	};
	return user;
}]);

app.controller("MyController", function($scope, $http, utilfactory) {
    
    $scope.paginationArray = [];

	var baseurl = 'https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites';
	utilfactory.getData(baseurl).then(function (response) {
		if (response.status === 200) {
			console.log(response);
			$scope.totalList = response.data.websites;
			$scope.list_websites =  (response.data.websites).slice(0,5);
			for(i=0;i<response.data.websites.length;){
				$scope.paginationArray.push(i);
				i = i+5;
			}
		}
	})

  
    var from=0,to;
	$scope.paginate = function(index){
		from = (index-1)*5;
		to   = index*5;
		$scope.list_websites = [];
		$scope.list_websites = $scope.totalList.slice(from,to);
	}

	$scope.addToData = function(title,url,tag){
		console.log(title,url,tag)
       var myData = {} ;
           myData = {"title":title ,
                     "url_address":url , 
                     "tag":tag,
                     "id":$scope.totalList.length +1
                 };

       $scope.totalList.push(myData);
       myData = {};    
	}

	$scope.goto = function(url){
		window.open(url)
	}

})