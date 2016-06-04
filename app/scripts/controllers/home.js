'use strict';

/**
 * @ngdoc function
 * @name prosearchApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the prosearchApp
 */
angular.module('prosearchApp')
  .controller('HomeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.itemsToShow = {
      leftArrow: false,
      middleArrow: false,
      rightArrow: false,
      leftButton: false,
      middleButton: false,
      rightButton: false,
    };

    $(document).ready(function () {
      $(document).scroll(function(){
        if($('#puzzle-map').position()){
          if($(this).scrollTop()>=$('#puzzle-map').position().top){
            showArrowsAndButtons();
          }
        }
      });
    });


    function showArrowsAndButtons() {
      var delay = 0;
      angular.forEach($scope.itemsToShow, function(value, key) {
        show(key, delay);
        delay += 700;
      });
    }

    function show(key, delay) {
      if(!$scope.itemsToShow[key]) {
        $timeout(function() {
          $scope.itemsToShow[key] = true;
          $scope.$apply();
        },delay);
      }
    }
  }]);
