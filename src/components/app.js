angular.module('video-player')
.component('app', {
  // bindings: {
  //   videos: '<'
  // },
  controller: function() {
    this.search='';
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.url = `https://www.youtube.com/embed/${this.currentVideo.id.videoId}`;
    this.selectVideo = function() {
      console.log('a');
      this.currentVideo = video;
    };
    this.searchResults = function(query) {
      console.log ('search')
      //youTube(this.search)
    };
  },
  templateUrl: 'src/templates/app.html'
});
