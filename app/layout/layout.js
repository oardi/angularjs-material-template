function layoutCtrl($mdSidenav) {
    var vm = this;

    this.$onInit = function () {
    }

    vm.menu = [
        { link: "home", title: "Home", icon: "home" },
        { link: "settings", title: "Settings", icon: "settings" }
    ];

    vm.toggleNav = function () {
        $mdSidenav("left").toggle();
    }
}

angular.module("app").component("layout", {
    templateUrl: "app/layout/layout.html",
    controller: layoutCtrl
});