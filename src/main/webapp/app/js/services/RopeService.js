angular.module('myApp').service('RopeService', function ($http, $log) {
    var user = {};

    this.putHarness = function (onOff){
        return $http({
            method: 'PUT',
            url: '/rappel/harness',
            params: {
                onOff: onOff
            }
        });
    };

    this.anchorHarnessOnOff = function (onOff){
        return $http({
            method: 'PUT',
            url: '/rappel/anchor/harness',
            params: {
                onOff: onOff
            }
        });
    };
    this.anchorShrubOnOff = function (onOff){
        return $http({
            method: 'PUT',
            url: '/rappel/anchor/shrub',
            params: {
                onOff: onOff
            }
        });
    };

    this.canRappel = function (){
        return $http({
            method: 'get',
            url: '/rappel/status'
        });
    };

    this.rappelOn = function (){
        return $http({
            method: 'get',
            url: '/rappel/on'
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

