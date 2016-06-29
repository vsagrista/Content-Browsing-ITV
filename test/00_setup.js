var http = require('http'), 
    server; 
 
before(function() { 
  server = http.createServer(require('../server')); 
  server.listen(3000); 
  browser.baseUrl = 'http://localhost' + server.address().address + server.address().port; 
}); 
 
after(function(){
  server.close(); 
});