const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/add-to-cart-master/'))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/add-to-cart-master/' })
});

app.listen(process.env.PORT || 8080);