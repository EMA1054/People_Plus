(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        vm.un = 'Username';
        vm.pw = 'Password';
        vm.fn = 'First Name';
        vm.ln = 'Last Name';
        vm.en = 'Employee Number';
        vm.tn = 'Tracking Number';
        vm.rpw = 'Repeat Password';
    }

})();