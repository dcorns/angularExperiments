/**
 * controllerMain_test.js
 * Created by dcorns on 8/5/15.
 */
'use strict';
require('../app/app');
require('angular-mocks');

describe('controllerMain', function(){
  //mocks

  beforeEach(angular.mock.module('app'));
  var $controller, scope;
  beforeEach(inject(function(_$controller_,_$rootScope_){
    $controller = _$controller_;
    scope = _$rootScope_.$new();
    var controllerMain = $controller('controllerMain', {$scope: scope});
  }));

  describe('$scope.message', function(){
    it('should have message equal to I am Angular!!', function(){
      expect(scope.message).toEqual('I am Angular!!');
    });
    it('should be able to change message value', function(){
      scope.message = 'Angular';
      expect(scope.message).toEqual('Angular');
    })
  });
});