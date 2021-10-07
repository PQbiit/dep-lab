const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles/style.css'))
});

const port = process.env.PORT || //choose port number

app.listen(port, () => {
    console.log(`BBQ running on port ${port}.`)
});