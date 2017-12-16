angular.module('video-player') 

  .service('youTube', function($http, $window) {  
    this.search = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search/', 
        params: {
          part: 'snippet',
          q: 'query',
          type: 'video',
          maxResults: 5,
          key: $window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true'
        } 
      }).then(function successCallback(data) {
        console.log('is this visible');
        console.log(data);
        if (callback) {
          console.log(data);
          callback(data);
        }
      }, function errorCallback(response) {
        console.error(response);
      });
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   videoEmbeddable: 'true',
    //   success: function(data) {
    //     //callback(data.items);
    //   },
    //   error: function(error) {
    //     console.error (error);
    //   }
    // });
    };
  });