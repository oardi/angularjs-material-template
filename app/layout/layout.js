function layoutCtrl(){
    //var vm = this;

    this.$onInit = function(){
    }
}

angular.module("app").component("layout", {
    bindings:{},
    templateUrl: "app/layout/layout.html",
    controller: layoutCtrl
});