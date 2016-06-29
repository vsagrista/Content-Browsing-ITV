var express = require('express'), 
    app = express(); 
 
app.use(express.static(__dirname)); 
 
app.all('*', function(req, res) {
  res.sendfile('index.html', {root:'static'}); 
});
 
app.listen(process.env.PORT ||3000);