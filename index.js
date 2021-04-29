const express = require('express');
const path = require('path');
var morgan = require('morgan')


const PORT = 8880;
const app = express();

app.use(morgan("common"));

app.disable('etag');
app.disable('view cache');

app.set('view engine', 'ejs');
console.log('__dirname :>> ', __dirname);
// app.use(express.static((__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.render('index', {text: 'Hello...'})
});
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`);
});