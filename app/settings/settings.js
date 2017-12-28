function settingsCtrl($rootScope) {
    var vm = this;

    vm.themes = ["blue", "green"];
    vm.theme = "blue";

    this.$onInit = function () {
    }

    vm.updateTheme = function () {
        console.warn("update theme");
        $rootScope.$broadcast("update-theme", vm.theme);
    }
}

angular.module("app").component("settings", {
    bindings: {},
    templateUrl: "app/settings/settings.html",
    controller: settingsCtrl
});