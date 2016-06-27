angularApp.service('getUrl', function() {
  this.run = function(){
  	console.log('running');
  };
  
  var urls = {
  	Children: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Children&broadcaster=itv',
  	Comedies: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Comedy&broadcaster=itv',
  	'Drama and Soups': 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Drama+%26+Soaps&broadcaster=itv',
    Entertainment: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Entertainment&broadcaster=itv',
    Factual: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Factual&broadcaster=itv',
    Films: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Films&broadcaster=itv',
    News: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=News&broadcaster=itv',
    Sport: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Sport&broadcaster=itv'
  };

  this.map = function(type) {
  	for (var prop in urls) {
  		if (prop.toLowerCase() === type.toLowerCase()) return urls[prop];
  	}
  };

});