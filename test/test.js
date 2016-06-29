// To debug use browser.pause()

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
      expect(text).to.be('Recently Seen'); 
    }); 
  }); 
});

describe('Navbar Browsing', function(){ 
  it('should browse to pages from navbar', function() { 
    browser.get('/');
    element.all(by.tagName('a')).get(0).click();
     element(by.xpath('//h1')).getText().then(function(text) { 
      expect(text).to.be('Recently Seen'); 
    }); 
     element.all(by.tagName('a')).get(1).click();
     element(by.xpath('//h1')).getText().then(function(text) { 
      expect(text).to.be('Hello from categories'); 
    });
    element.all(by.tagName('a')).get(2).click();
     element(by.xpath('//h1')).getText().then(function(text) { 
      expect(text).to.be('Channels'); 
    }); 
    element.all(by.tagName('a')).get(3).click();
     element(by.xpath('//h1')).getText().then(function(text) { 
      expect(text).to.be('Displaying mostpopular'); 
    });  
  }); 
});

describe("Categories and children's Category Page", function(){ 
  it("should contain categories and browse to children's section", function() { 
    browser.get('/#categories');
      element(by.xpath('//h1')).getText().then(function(text) { 
        expect(text).to.be('Hello from categories'); 
      }); 
      	
      element.all(by.css('.content-name')).get(0).click();
      element(by.xpath('//h1')).getText().then(function(text) { 
        expect(text).to.be('Displaying children'); 
      }); 
  }); 
});

