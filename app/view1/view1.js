'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'HNApi', function($scope,
                                                        HNApi)
                            {
                              var top = HNApi.top.query().$promise.then(function(tops){
                                var items = [];
                                var storyId;
                                console.log();
                                for(storyId in tops){
                                  console.log(tops[storyId]);
                                  var object = { id: tops[storyId] };
                                  HNApi.item.query(object).$promise.then(function(item) {
                                    items.push(item['title']);
                                  });

                                }
                                $scope.items = items;
                              });


                              $scope.top = top;
                            }]);
