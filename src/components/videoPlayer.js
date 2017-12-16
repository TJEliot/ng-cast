angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<',
    url: '<'
  },
  controller: function() {
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
