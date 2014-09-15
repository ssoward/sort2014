angular.module('myApp').controller('AdminController', function ($scope, HomeService, $log){
    $scope.greeting = 'Hello, world';
    init();
    function init(){
        HomeService.getAllUsers().then(function(res){
            var users = [];
            angular.forEach(res.data, function(item){
                users.push(item);
                $scope.users = users;
            });
        });
    }

    this.deferMyFunction = function(){

        var defer = $q.defer();

        defer.promise.then(function(){
           $log.info('finished my promise');
        });

        defer.resolve();

    }
});
