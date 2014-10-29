var angularHackerNewsServices = angular.module('angularHackerNewsServices',
                                               ['ngResource']);

angularHackerNewsServices.factory('TopStories',['$resourcee',
  function($resource){
    return $resource('https://hacker-news.firebaseio.com/v0/topstories.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
