
var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    $scope.data = [{option:[1,3,4,6]},
                   {option:[31,32,43,23]},
                  ];
    $scope.getQues = function(){
    	$scope.showQDiv=true;
    }   

    $scope.eachClick = function(ev){
            var node = document.createElement('span');
            node.className += "dot animate";

            var allInks = document.querySelectorAll('.dot');


            if (allInks.length > 0) {
                allInks.forEach(function(i) {
                    i.remove()
                })
            }
            ev.target.parentNode.appendChild(node)
            node.style.transform = 'scale(2)';
    }           
})