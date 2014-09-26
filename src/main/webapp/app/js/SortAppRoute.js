var myApp = angular.module('myApp');

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');

    $stateProvider
        .state('view1', {
            url: '/view1',
            templateUrl: 'partials/partial1.html',
            controller: 'HomeController',
            resolve:{
                fetchData:homeController.fetchData
            }
        })
        .state('view2', {
            url: '/view2',
            templateUrl: 'partials/partial2.html',
            controller: 'HomeController'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'partials/admin.html',
            controller: 'AdminController'
        })
//        .when('/route',{
//            templateUrl: 'partials/route.html',
//            controller: "RouteController",
//            resolve:{
//                fetchData:routeController.fetchData
//            }
//        })


});
