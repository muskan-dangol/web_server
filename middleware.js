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

module.exports= middleware;