'use strict';

var indexControllers = angular.module('myApp.indexControllers', []);

indexControllers.controller('TopStoriesCtrl', ['$scope', 'HNApi',
                                               function($scope, HNApi)
{
  var top = HNApi.top.query().$promise.then(function(tops) {
    var items = [];
    var storyId;

    for(storyId in tops){
      console.log(tops[storyId]);
      var object = { id: tops[storyId] };
      HNApi.item.query(object).$promise.then(function(item) {
        items.push(item);
      });

    }
    $scope.items = items;
  });

  $scope.top = top;
}]);
