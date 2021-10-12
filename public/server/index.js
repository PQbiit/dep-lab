const express = require('express');
const path = require('path');

const app = express();
app.use('/styles/style.css', express.static(path.join(__dirname, '../styles/style.css')));
app.use('/client/menu.js', express.static(path.join(__dirname,'../client/menu.js')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/menu',function (req,res) {
    res.sendFile(path.join(__dirname,'../client/menu.html'));
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`BBQ running on port ${port}.`)
});

