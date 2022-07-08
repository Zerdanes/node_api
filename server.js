/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const actorRoutes = require('./routes/actors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

// Routes "Actors"
app.use('/api/actors', actorRoutes);

// Fallback route
app.use((req, res) => {
    res.status(404);
});
