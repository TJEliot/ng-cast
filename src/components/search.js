angular.module('video-player')
.component('search', {
  bindings: {
    search: '<',
    result: '<'
  },
  templateUrl: 'src/templates/search.html'
});
