'use strict';

var angularHackerNewsServices = angular.module('myApp.angularHackerNewsServices',
                                               ['ngResource']);

angularHackerNewsServices.factory('HNApi',['$resource',
  function($resource){
    return {
      top: $resource('https://hacker-news.firebaseio.com/v0/topstories.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
      }),
      item: $resource('https://hacker-news.firebaseio.com/v0/item/:id.json', {id:'@id'}, {
        query: { method: 'GET'}
      })
    };
  }]);
