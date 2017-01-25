var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars').create();

var app = express();

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('home');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
