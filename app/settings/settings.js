function settingsCtrl(){
    var vm = this;

    this.$onInit = function(){
        console.info("init settings component");
    }
}

angular.module("app").component("settings", {
    bindings:{},
    templateUrl: "app/settings/settings.html",
    controller: settingsCtrl
});