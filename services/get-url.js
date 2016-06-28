angularApp.service('getUrl', function() {
  
  var urls = {
  	Children: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Children&broadcaster=itv',
  	Comedies: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Comedy&broadcaster=itv',
  	'Drama & Soups': 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Drama+%26+Soaps&broadcaster=itv',
    Entertainment: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Entertainment&broadcaster=itv',
    Factual: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Factual&broadcaster=itv',
    Films: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Films&broadcaster=itv',
    News: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=News&broadcaster=itv',
    Sport: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&category=Sport&broadcaster=itv',
    MostPopular: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV'
  };

  this.categories = [
    {name: 'Children', image: 'http://www.itv.com/entity/d8d99719-589c-4ee0-b858-a7de53b798a8/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'},
    {name: 'Comedies', image: 'http://www.itv.com/entity/2d73f921-48aa-49fd-a033-62b6630eecd5/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'},
    {name: 'Drama and Soups', image: 'http://www.itv.com/entity/f8343179-79d8-4c59-a3d3-59edbbfbf8b4/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'},
    {name: 'Entertainment', image: 'http://www.itv.com/entity/b68785a6-c8e8-4a0e-a806-4f650e32c70a/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'},
    {name: 'Factual', image: 'http://www.itv.com/entity/1fe6d695-25e8-4660-bf5c-66eb4aa2820f/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'},
    {name: 'Films', image: 'http://www.itv.com/entity/5fe53011-24c1-437d-af1f-1e3226a15aaa/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'},
    {name: 'News', image: 'http://www.itv.com/entity/5d82c4f2-c638-45a2-a2fa-9b2fd013d62f/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'},
    {name: 'Sport',image: 'http://www.itv.com/entity/5770869f-0770-426f-a9a2-6de3f5959242/image.jpg.ashx?q=%7bquality%7d&format=%7bimage_format%7d&w=%7bwidth%7d&h=%7bheight%7d'}
  ];

  this.channels = [
    {name: 'ITV', image: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/itvstatic/assets/images/brands/itv/itv-colour-pos.svg'},
    {name: 'ITV2', image: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/itvstatic/assets/images/brands/itv2/itv2-colour.svg'},
    {name: 'ITVBe', image: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/itvstatic/assets/images/brands/itvbe/itvbe-colour.svg'},
    {name: 'ITV3', image: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/itvstatic/assets/images/brands/itv3/itv3-colour.svg'},
    {name: 'ITV4', image: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/itvstatic/assets/images/brands/itv4/itv4-colour.svg'},
    {name: 'CITV', image: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/itvstatic/assets/images/brands/citv/citv-colour.svg'},
  ];

  this.map = function(type) {
  	for (var prop in urls) {
  		if (prop.toLowerCase() === type.toLowerCase()) return urls[prop];
  	}
  };

  this.run = function(){
    console.log('running');
  };
 
});