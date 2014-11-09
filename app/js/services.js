'use strict';

var angularHackerNewsServices = angular.module('myApp.angularHackerNewsServices',
                                               ['ngResource']);

angularHackerNewsServices.factory('TopStories',['$resource',
  function($resource){
    return $resource('https://hacker-news.firebaseio.com/v0/topstories.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
