'use strict';

/**
 * @ngdoc function
 * @name prosearchApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the prosearchApp
 */
angular.module('prosearchApp')
  .controller('HeaderCtrl', ['$scope',
    function ($scope) {
      // Expose view variables
      // $scope.$state = $state;
      // $scope.authentication = Authentication;

      // Get the topbar menu
      // $scope.menu = Menus.getMenu('topbar');

      // Toggle the menu items
      $scope.isCollapsed = false;
      $scope.toggleCollapsibleMenu = function () {
        $scope.isCollapsed = !$scope.isCollapsed;
      };

      // Collapsing the menu after navigation
      $scope.$on('$stateChangeSuccess', function () {
        $scope.isCollapsed = false;
      });

      $("#left-menu a").css('height',($(window).height()/9));
      $("#left-menu").css('width',($(window).height()/9));
      $("#left-menu a img").css('height',($("#left-menu").width()/3));
    }
  ]);
