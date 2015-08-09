/**
 * index.js
 * Created by dcorns on 8/5/15.
 */
'use strict';
var angular = require('angular');
var controllerMain = require('./controllers/controllerMain');
var app = angular.module('app', [])
    .controller('anothercontroller', function($scope){
      $scope.world = 'Ronald Reagan';
    });

//another way to add a controller to the app
app.controller('controllerMain', ['$scope', controllerMain]);