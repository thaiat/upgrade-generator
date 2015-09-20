'use strict';
var controllername = 'home';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;
        switch (vm.controllername) {
            case 'main.common.home':
                vm.message = 'Hello World 1';
                break;
            default:
                vm.message = 'Hello World 1';
        }

        vm.add = function(a, b) {
            return a + b;
        };
        var activate = function() {

        };
        activate();
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
