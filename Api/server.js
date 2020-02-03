///appeler express 
var express = require('express');

var app = express();

var port = process.env.PORT || 3500;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'welcome to your API!.' });
})

app.use('/api',router);

app.listen(port);
console.log('server started at port number : '+port);
