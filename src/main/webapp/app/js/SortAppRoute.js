var myApp = angular.module('myApp');

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/rope');

    $stateProvider
        .state('rope', {
            url: '/rope',
            templateUrl: 'partials/rappel.html',
            controller: 'RopeController'
        })



//        .state('view1', {
//            url: '/view1',
//            templateUrl: 'partials/partial1.html',
//            controller: 'HomeController',
//            resolve:{
//                fetchData:homeController.fetchData
//            }
//        })
//        .state('view2', {
//            url: '/view2',
//            templateUrl: 'partials/partial2.html',
//            controller: 'HomeController'
//        })
//        .state('admin', {
//            url: '/admin',
//            templateUrl: 'partials/admin.html',
//            controller: 'AdminController'
//        })
//        .when('/route',{
//            templateUrl: 'partials/route.html',
//            controller: "RouteController",
//            resolve:{
//                fetchData:routeController.fetchData
//            }
//        })


});
