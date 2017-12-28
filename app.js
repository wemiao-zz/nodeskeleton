const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    _ = require('lodash');

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/client/'))

app.get('/', (req, res) => {
    var readFile = "./client/index.html";
    var fileContents = fs.readFileSync(readFile);
    res.send(fileContents.toString());
});

