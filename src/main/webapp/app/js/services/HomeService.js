angular.module('myApp').service('HomeService', function ($http, $log) {
    var user = {};

    this.getLoggedInUser = function (){
        return $http({
            method: 'GET',
            url: '/api/loggedIn'
        });
    };

    this.getAllUsers = function (){
        return $http({
            method: 'GET',
            url: '/users'
        });
    };

    this.setUser = function (pro){
        user = pro;
    };

    this.getUser = function (){
        return user;
    };
});

//function loadXMLDoc(){
//    var xmlhttp;
//    if (window.XMLHttpRequest)  {
//        xmlhttp=new XMLHttpRequest();
//    }
//    else {
//        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//    }
//    xmlhttp.onreadystatechange=function()  {
//        if (xmlhttp.readyState==4 && xmlhttp.status==200)    {
//            document.getElementById("aDiv").innerHTML=xmlhttp.responseText;
//        }
//    }
//    xmlhttp.open("GET","/someEndpoint",true);
//    xmlhttp.send();
//}

this.getUser = function () {
    return HomeService.doFirst(pId)
        .then(function (res) {
            $scope.resultOne = res.data;
            return $scope.resultOne
        })
        .then(function (resultOne) {
            return HomeService.doSecond(resultOne.id);
        })
        .then(function () {
            return HomeService.doThird()
                .then(function (res) {
                    $scope.resultThird = res.data;
                    _.forEach($scope.resultThird, function (pos) {
                        pos.someVa = pos.someVa + ' hello world';
                    });
                    $scope.resultThird = _.sortBy($scope.resultThird, 'name');
                });
        })
        .then(function () {
            updateView();
        });
};

