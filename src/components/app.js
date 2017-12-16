angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.search = 'search here';
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function(video) {
        this.currentVideo = video;
      };
      this.setter = (results) => {
        console.log('the results are');
        console.log(results);
        this.videos = results.data.items;
        this.selectVideo(this.videos[0]);
      };
      this.searchResults = (setter) => {
        console.log ('search');
        console.log (this.search);
        console.log(this.setter);
        youTube.search(this.search, this.setter);
        this.search = '';
      };
    },
    templateUrl: 'src/templates/app.html'
  });
