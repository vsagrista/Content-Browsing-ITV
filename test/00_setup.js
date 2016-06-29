var http = require('http'), 
    server; 
 
before(function() { 
  server = http.createServer(require('../server')); 
  server.listen(3000); 
  browser.baseUrl = 'http://localhost:3000';
}); 
 
after(function(){
  server.close(); 
});