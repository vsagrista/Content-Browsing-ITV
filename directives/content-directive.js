angularApp.directive('contentDirective', function(){
  return {
    templateUrl: 'templates/content-directive.html',
    replace: true,
    scope: {
      mainVariable: '=',
      contentObject: '=',
    	categoriesVariable: '=',
    	choiceVariable: '=',
    	channelsVariable: '=',
    	episodeVariable: '=',
    	playerVariable: '=',
      videoUrlVariable: '=',
      saveInMySelectionFunction: '&'
    }
  };
});
