var homeController = angular.module('myApp').controller('HomeController', function ($scope, HomeService, $log, $q){
    $scope.greeting = 'Hello, world';

    function init(){
        HomeService.getLoggedInUser().then(function(res){
            $scope.user = res.data;
            HomeService.setUser($scope.user);
        });
    }

    init();

    // DEFER ------------

    $scope.deferMyFunction = function (){

        $log.info('starting my defer function');
        var defer = $q.defer();

        defer.promise
            .then(function(){
                $log.info('finished my promise');
            });

        //tell the promise to run
        defer.resolve();

    };


});
// ROUTE ------------
homeController.fetchData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function (){
        defer.reject('There was something wrong with the http call');
//    defer.resolve();
    }, 5000);
    return defer.promise;
}
