const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/about', (req, res) => {
    res.render('about', {});
});

app.get('/work', (req, res) => {
    res.render('work', {});
});

app.get('/project/:name', (req, res) => {
    var name = req.params.name;
    res.render('project/' + name, {});
});

app.get('/.well-known/acme-challenge/QAUPgeIaafEVt60doUzTljR-EnOyge6gRfFYIR2DjG8', (req, res) => {
    res.send('QAUPgeIaafEVt60doUzTljR-EnOyge6gRfFYIR2DjG8.MaGiXMpQ1GUptMbPN3Keep2W4Lg0sOY4QbxekyYrnP0');
});

app.listen(PORT, () => {
    console.log(`Active on port: ${PORT}`);
});
