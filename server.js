const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('UNDER CONSTRUCTION');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/project/:name', (req, res) => {
    var name = req.params.name;
    res.send(name);
});

app.listen(PORT, () => {
    console.log(`Active on port: ${PORT}`);
});
