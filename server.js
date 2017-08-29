var express = require('express')
var app = express()
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

app.use('/js', express.static(__dirname + '/js'));
// app.use('/bower_components', express.static(__dirname + '/../bower_components'));
// app.use('/css', express.static(__dirname + '/css'));
// app.use('/partials', express.static(__dirname + '/partials'));

// app.all('/*', function(req, res, next) {
//     // Just send the index.html for other files to support HTML5Mode
//     res.sendFile('index.html', { root: __dirname });
// });

// app.get('/', function (req, res) {
//   res.send('Hello World!')
  
// })

var serveStatic = require('serve-static');
app.use(serveStatic(__dirname, {'index': ['header.html']}))


// app.get('*', function(req, res) { res.sendFile(rootPath + '/davesapp/header.html'); });

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})