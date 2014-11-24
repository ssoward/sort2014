angular.module('myApp').controller('RopeController', function ($scope, RopeService, $log, $q, $http){
    $scope.greeting = 'Hello, world';
    $scope.view = {};
    $scope.view.timeToRappel = false;

    function init(){
        $scope.canRappel();
    }

    $scope.canRappel = function(){
        RopeService.canRappel()
            .then(function (res) {
                $scope.harness = res.data.harness;
                $scope.harnessRope = res.data.harnessRope;
                $scope.anchorRope = res.data.anchorRope;
            }, function (data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
                $log.error('Error occurred: '+status);
            });
    };

    $scope.rappelOn = function(){
        return RopeService.rappelOn()
            .success(function(data, status){
                $scope.rappelOnRIP = data.rappelOn;
                $scope.view.timeToRappel = true;
                $scope.successPic = Math.round(Math.random()*7) + 1;
                $scope.ripPic = Math.round(Math.random()*1) + 1;
            })
    };


    $scope.anchorHarnessOnOff = function(onOff){
        return RopeService.anchorHarnessOnOff(onOff)
            .success(function(data, status){
                $scope.canRappel();
                $scope.view.timeToRappel = false;
                return data;
            })
    };

    $scope.anchorShrubOnOff = function(onOff){
        return RopeService.anchorShrubOnOff(onOff)
            .success(function(data, status){
                $scope.canRappel();
                $scope.view.timeToRappel = false;
            })
    };

    $scope.harnessOnOff = function(onOff){
        return RopeService.putHarness(onOff)
            .success(function(data, status){
                $scope.canRappel();
                $scope.view.timeToRappel = false;
            })
    };

    $scope.rappelPrepare = function(){
        var defer = $q.defer();
        var promise = defer.promise;

        promise
            .then(function(){
                return $scope.harnessOnOff(true);
            })
            .then(function(){
                return $scope.anchorShrubOnOff(true);
            })
            .then(function(){
                return $scope.anchorHarnessOnOff(true);
            })
            .then(function(){
                return $scope.rappelOn();
            });

        defer.resolve();
        defer.reject("Error occurred");
    };
//
//    $scope.rappelPrepare = function(){
//        var promises = [];
//
//        promises.push( $scope.harnessOnOff(true));
//        promises.push( $scope.anchorShrubOnOff(true));
//        promises.push( $scope.anchorHarnessOnOff(true));
//
//        var all = $q.all(promises);
//
//        all.then(function(){
//            $scope.rappelOn();
//        })
//    };

//
//    $scope.rappelPrepare = function(){
//        $scope.harnessOnOff(true)
//            .then(function() {
//                return $scope.anchorShrubOnOff(true);
//            })
//            .then(function() {
//                return $scope.anchorHarnessOnOff(true);
//            })
//            .then(function() {
//                return $scope.rappelOn();
//            })
//            .then(function(){});
//    };
//
//    $scope.rappelPrepare = function(){
//        $scope.harnessOnOff(true)
//            .then(function(){
//                $scope.anchorShrubOnOff(true)
//                    .then(function(){
//                        $scope.anchorHarnessOnOff(true)
//                            .then(function(){
//                                $scope.rappelOn()
//                                    .then(function(){}
//                                    ,function(error) { throw "An error rappelling: " + error; });
//                            },function(error) { throw "An error putting the rope on the harness: " + error; });
//                    },function(error) { throw "An error putting the rope on the shrub: " + error; });
//            },function(error) { throw "An error putting on harness: " + error; });
//    };

//    $scope.rappelPrepare = function(){
//        $scope.harnessOnOff(true)
//            .then(function(){
//                $scope.anchorShrubOnOff(true)
//                    .then(function(){
//                        $scope.anchorHarnessOnOff(true)
//                            .then(function(){
//                                $scope.rappelOn()
//                                    .then(function(){})
//                                    .catch(function(error) { throw "An error rappelling: " + error; });
//                            })
//                            .catch(function(error) { throw "An error putting the rope on the harness: " + error; });
//                    })
//                    .catch(function(error) { throw "An error putting the rope on the shrub: " + error; });
//            })
//            .catch(function(error) { throw "An error putting on harness: " + error; });
//    };


    function simpleQ(val){
        var q = $q.defer();
        if(val && typeof val != 'undefined') {
            q.resolve(val.replace('Nils', 'Scott'));
        }else{
            q.reject('undefined');
        }
        return q.promise;
    }

    $scope.clearMessage = function() {
        $scope.message = '';
    };

    $scope.promiseQ = function() {
        var promise = simpleQ($scope.message);
        promise.then(function(res){
            $log.info(res);
            $scope.messageOut =  res;
        }, function(error){
            $scope.messageOut =  error;
        });
    };



    init();

});