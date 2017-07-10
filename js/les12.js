/**
 * Created by konoplya on 15.06.2017.
 */
var app=angular.module("myModule",[])
//Task 8
    .directive("dateTime", function () {
    return function (scope, element, attributes) {
        var attrValue = attributes["dateTime"];
        var dataFromScope = scope[attrValue];
        console.log(typeof scope.date);
        if (angular.isObject(dataFromScope)) {
            var e = angular.element("<p>");
            element.append(e);
                e.text(dataFromScope);
        }
    }
})
    .controller("dateCtrl", function ($scope) {
        $scope.date = new Date();
    });
//Tasks 1,2
app.controller("forStyleCtrl",function ($scope) {
    $scope.applyObj=function () {
        $scope.styleObj={
            border: "3px solid blue",
            backgroundColor:"yellow",
            width:"150px",
            height:"150px"
        };
    };
    $scope.applyArr=function () {
        $scope.classArr=['textWeight','alignment','size'];
    };
    $scope.changeBack=function () {
      $scope.className="active";
    }
});
//Task 3
app.controller("forDisCtrl",function ($scope) {
    $scope.dis=false;
});
//Task 4
app.controller("forValidCtrl",function($scope){
});
//Task 5
app.controller("tabCtrl",function ($scope) {
    $scope.list=[{name:"Oleg",birthday:"83/2/18", city:"Dnepr"},
        {name:"Sergey",birthday:"94/05/05", city:"Lvov"},
        {name:"Ivan",birthday:"60/07/03", city:"Kiev"}];
    $scope.birthD = function (day) {
        var strDay = new Date(day);
        return strDay;
    }
});
//Task 6

//Task 7
app.controller("sendCtrl",function ($scope,$rootScope) {
    $scope.sender=function(){
        $rootScope.$broadcast("messageEvent", {mes: $scope.sendText});
    }
});
app.controller("recCtrl",function($scope){
    $scope.$on("messageEvent",function(event,args){
        $scope.sendInfo=args.mes;
    })
});