angularApp.service('buildObjArr', function() {
  this.run = function(array, data){
    data.forEach(
      function(content){
        array.push({
          image: content._links.image.href.slice(7, content._links.image.href.length), // http:// is repeated for some reason,
          name: content._embedded.programme.title
        });
      });
    return array;
  };
});