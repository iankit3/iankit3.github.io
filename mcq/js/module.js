var correct = 0, inCorrect = 0 , graphArr = [];
var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope,$timeout){
    $scope.data = [
                   {ques:'Is "string" == "String"',option:['true','false']
                   ,cAns:'false',cAnsIndex:'1'},
                   {ques:'What is the size of int in a 32 bit computer in bytes'
                    ,option:[2,8,4,16]
                    ,cAns:'4',cAnsIndex:'2'},
                   {ques:'What is parseInt("seven"))'
                    ,option:['7','seven','undefined','NaN']
                    ,cAns:'NaN',cAnsIndex:'3'},
                   {ques:'typeof arr[]',option:['Array','array','object','[]']
                   ,cAns:'object',cAnsIndex:'2'},
                   {ques:'Latest version of Ubuntu is',option:['16.10','17.04','16.04','15.90']
                   ,cAns:'16.04',cAnsIndex:'2'},
                  ];

    $scope.getQues = function(){
    	$scope.showQDiv=true;
    }   

    
    function moveHead(index){
      if(typeof $scope.data[index] != 'undefined'){    
        $scope.selectedQues = $scope.data[index]
      }else{
        $scope.showGraph = true;
        $scope.userAnswer.forEach(function(e,i){
           if(e.uAns == e.cAns) correct++;
           else inCorrect++;
        })
        graphArr.push(correct,inCorrect)
        callGraph(graphArr);
      }
    } 
$scope.userAnswer = angular.copy($scope.data);
var startIndex = 0;
$scope.selectedQues = $scope.data[0]

    $scope.eachClick = function(ev,$index){
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

        $scope.userAnswer[startIndex].uAns = ev.target.value;
        $scope.userAnswer[startIndex].uAnsIndex = $index;

        startIndex++;
        $timeout(function(){
            moveHead(startIndex);
        },500)
    }           
})

function callGraph(d){
    var node = document.createElement('h1');
    var t = document.createTextNode("Correct:"+d[0]+", InCorrect:"+d[1]);
            node.appendChild(t);
        
    var chart = document.getElementById("graphCont")
        chart.appendChild(node); 
    var data = d//[50,100,200,320,520,20,230,20,040,200,100,200,10,200,300];

    var canvas = d3.select("#graph")
                   .append("svg")
                   .attr("width",200)
                   .attr("height",200);

    var group  = canvas.append("g")
                       .attr("transform","translate(100,100)");


    var arc = d3.svg.arc()
              .innerRadius(30)
              .outerRadius(100);

    var pie = d3.layout.pie()
              .value(function(d){return d*50});

    var arcs = group.selectAll(".arc") 
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class","arc");

    arcs.append("path")
        .attr("d",arc)
        .attr("fill",function(d,i){return i==0?"green":"red"})    
    document.getElementById("summary").style.display = 'block';  
}