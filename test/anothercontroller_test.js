/**
 * anothercontroller_test
 * Created by dcorns on 8/7/15.
 */
'use strict';
require('../app/app');
require('angular-mocks');

describe('anothercontroller', function(){
  beforeEach(angular.mock.module('app'));
  var $controller, $scope;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    $scope = {};
    $controller('anothercontroller', {$scope: $scope});
  }));
  describe('$scope.world', function(){
    it('should have a value equal to Dale', function(){
      expect($scope.world).toEqual('Ronald Reagan');
    });
    it('should be able to have its value changed', function(){
      $scope.world = 'Code Fellows';
      expect($scope.world).toEqual('Code Fellows');
    })
  });
});