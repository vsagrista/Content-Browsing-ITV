var expect = require('expect.js');
describe('Test',function() {
  it('should succeed',function() {
    expect(true).to.be(true);
  });
});

describe('Index Page', function(){ 
  it('should contain a heading', function() { 
    browser.get('/');
     element(by.xpath('//h1')).getText().then(function(text) { 
      expect(true).to.be(true);
      expect(text).to.be('Recently Seen'); 
    }); 
  }); 
});