angular.module('video-player')
  .component('app', {
    controller: function() {
      this.search = 'search here';
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function(video) {
        this.currentVideo = video;
      };
      this.searchResults = function(query) {
        console.log ('search');
        console.log (this.search);
        //youTube(this.search)
      };
    },
    templateUrl: 'src/templates/app.html'
  });
