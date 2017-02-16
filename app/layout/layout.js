function layoutCtrl($mdSidenav){
    var vm = this;

    this.$onInit = function(){
    }

    vm.toggleNav = function(){
        console.log("toggle");
         $mdSidenav("left").toggle();
    }
}

angular.module("app").component("layout", {
    bindings:{},
    templateUrl: "app/layout/layout.html",
    controller: layoutCtrl
});