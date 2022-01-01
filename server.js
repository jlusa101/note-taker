const express = require('express');
const path = require('path');
const { notes } = require("./db/notes.json");

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// Routing the server to send index.html to the user's screen
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Routing user to the notes.html to view their notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    let results = notes;

    res.json(results);
});


// Listening on the specified port and informing user
app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}!`);
});