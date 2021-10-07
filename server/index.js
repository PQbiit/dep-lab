const express = require('express');
const path = require('path');

const app = express();
app.use('/styles/style.css', express.static(path.join(__dirname, '../styles/style.css')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// app.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../styles/style.css'))
// });

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`BBQ running on port ${port}.`)
});

