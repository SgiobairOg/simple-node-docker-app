'use strict';

// Requirements
const 
    express = require('express'),
    path = require('path');

// Configuration
const 
    PORT = 8080,
    HOST = '0.0.0.0';

// App
const app = express();

// Documentation Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/app/index.html'));    
});

// App Routes
app.get('/greet', (req, res) => {
    res.send(`Hello there. Wie geht's\n`);
});

app.get('/greet/:name', (req, res) => {
    res.send(`Nice to meet you, ${req.params.name}. Wie geht's\n`);
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);