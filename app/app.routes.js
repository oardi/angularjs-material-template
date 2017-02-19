angular.module("app").config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/home', { template: "<home></home>" });

    $routeProvider.when('/settings', { template: "<settings></settings>" });

    $routeProvider.otherwise({ redirectTo: "/home" });
});