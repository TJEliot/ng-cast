angular.module('video-player')
.component('app', {
  // bindings: {
  //   videos: '<'
  // },
  controller: function() {
    this.search='';
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = function(video) {
      var v = video;
      setTimeout(function(){console.log(v);}, 500);
      
      this.currentVideo = video;
    };
    this.searchResults = function(query) {
      console.log ('search')
      //youTube(this.search)
    };
  },
  templateUrl: 'src/templates/app.html'
});
