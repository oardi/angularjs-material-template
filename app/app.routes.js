angular.module("app").config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/home', { template: "<home></home>" });

    //$routeProvider.when('/login', { template: "<login></login>" });
    $routeProvider.otherwise({ redirectTo: "/home" });

});