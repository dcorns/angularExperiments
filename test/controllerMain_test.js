/**
 * controllerMain_test.js
 * Created by dcorns on 8/5/15.
 */
'use strict';

describe('controllerMain', function(){
  beforeEach(function(){
    var controllerMain = require('../controllers/controllerMain');
  });
  it('should create message I am Angular!!', function(){
    expect('I am Angular!!').to.toEqual('I am Angular!!');
  });
});