const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(__dirname + '/front'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/front/index.html'))
});

app.get('/clay', (req, res) => {
    res.sendFile(path.join(__dirname + '/front/clay.html'))
});

app.get('/bs4', (req, res) => {
    res.sendFile(path.join(__dirname + '/front/bs4.html'))
});

app.listen(port, () => console.log(`live on port ${port}!`));

