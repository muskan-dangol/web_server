var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication: function (req, res, next){ //adding middleware to express
        console.log('Private route hit!');
        next();
    }, 
    logger: function(req, res, next){
        console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('This page is about me!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express Server started on port ' + PORT);
});