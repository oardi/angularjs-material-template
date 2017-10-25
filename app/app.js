angular.module("app", ["ngRoute", "ngAnimate", "ngAria", "ngMaterial"]);

angular.module("app").config(function ($mdThemingProvider, $mdIconProvider, $provide) {
    $mdIconProvider
        .icon("angular", "../assets/angular.svg", 128)

    $mdThemingProvider.theme("blue")
        .primaryPalette("blue")
        .accentPalette("red");

    $mdThemingProvider.theme("green")
        .primaryPalette("teal")
        .accentPalette("red");

    $mdThemingProvider.alwaysWatchTheme(true);
});

//https://docs.angularjs.org/guide/production
angular.module("app").config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);

angular.bootstrap(document, ["app"]);