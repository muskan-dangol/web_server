var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('This page is about me!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express Server started on port ' + PORT);
});