var express = require('express'), 
    app = express(); 
 
app.use(express.static(__dirname)); 
 
app.all('*', function(req, res) {
  res.sendFile('index.html'); 
});
 
if(require.main === module){
  app.listen(process.env.PORT ||3000); 
} else {
  module.exports = app; 
}