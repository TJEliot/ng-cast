angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      currentVideo: '='
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
