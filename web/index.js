console.log("node.js started");

var express = require('express');
var app = express();
var PORT = 3000;

var listener = app.listen(PORT, () => {
    console.log('express: port %d opened', listener.address().port);
});

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.contentType('html');
    res.status(200).sendFile(__dirname + '/src/index.html');
    console.log("GET: src/index.html is released");
});

app.get("/run_api.js", (req, res) => {
    res.contentType('javascript');
    res.status(200).sendFile(__dirname + '/src/run_api.js');
    console.log("GET: src/run_api.js is released");
});

