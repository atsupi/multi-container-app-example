console.log("node.js started");

const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'prod') {
    require('dotenv').config();
}
const APIORIGIN = process.env.APIORIGIN || "http://localhost:3001";
console.log("API end point is %s", APIORIGIN + "/fruit/prices");
const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
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
    if (process.env.NODE_ENV === 'prod') {
        res.status(200).sendFile(__dirname + '/src/run_api.prod.js');
        console.log("GET: src/run_api.prod.js is released");
    } else {
        res.status(200).sendFile(__dirname + '/src/run_api.js');
        console.log("GET: src/run_api.js is released");
    }
});
