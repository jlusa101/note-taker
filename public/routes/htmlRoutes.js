const path = require('path');
const router = require('express').Router();

// Routing the server to send index.html to the user's screen
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Routing user to the notes.html to view their notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;