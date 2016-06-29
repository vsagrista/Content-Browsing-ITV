angularApp.directive('contentDirective', function(){
	return {
    templateUrl: 'templates/content-directive.html',
    replace: true,
    scope: {
    	contentObject: '=',
    	categoriesVariable: '=',
    	choiceVariable: '=',
    	channelsVariable: '=',
    	episodeVariable: '=',
    	playerVariable: '=',
    	getEpisodesFunction: '&'
    }
  };
});
