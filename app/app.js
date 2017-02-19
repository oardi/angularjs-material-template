angular.module("app", ["ngRoute", "ngMaterial"]);

angular.module("app").config(function ($mdThemingProvider, $mdIconProvider, $provide) {

    $mdIconProvider
        .icon("angular", "../assets/angular.svg", 128)


    // $mdThemingProvider.generateThemesOnDemand(true);
    // $provide.value('themeProvider', $mdThemingProvider);

    $mdThemingProvider.theme("blue")
        .primaryPalette("blue")
        .accentPalette("red");

    $mdThemingProvider.theme("green")
        .primaryPalette("teal")
        .accentPalette("red");

    $mdThemingProvider.alwaysWatchTheme(true);
});