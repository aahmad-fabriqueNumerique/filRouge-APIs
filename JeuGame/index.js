// import required essentials
const http = require('http');
const express = require('express');
var cors = require('cors');

const itemsRouter = require('./routes/item2');

// create new app
const app = express();
app.use(express.json());

app.use(cors({origin: '*'}));
app.use('/items', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('api work :-)');
});

const server = http.createServer(app);
const port = 3045;
server.listen(port);
console.debug('Server listening on  http://localhost:'+port);