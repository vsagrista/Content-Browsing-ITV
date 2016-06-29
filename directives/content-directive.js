angularApp.directive('contentDirective', function(){
	return {
    templateUrl: 'templates/content-directive.html',
    replace: true,
    scope: {
    	contentObject: '=',
    	channelsVariable: '=',
    	episodeVariable: '=',
    	getEpisodesFunction: '&'
    }
  };
});
