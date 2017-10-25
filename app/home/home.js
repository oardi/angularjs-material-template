function homeCtrl(){
    this.$onInit = function(){
        console.info("init");
    }
}

angular.module("app").component("home", {
    bindings:{},
    templateUrl: "app/home/home.html",
    controller: homeCtrl
});