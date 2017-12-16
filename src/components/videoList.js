angular.module('video-player')
  .component('videoList', {
    bindings: {
      currentVideo: '=',
      videos: '=',
      onClick: '='
    },
    templateUrl: 'src/templates/videoList.html'
  });
