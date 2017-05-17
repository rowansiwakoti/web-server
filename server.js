var express = require('express')
var app = express();
const PORT = 3000;


var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method);
		next();
	}
};

//app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('This is about us page!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started!');
});
