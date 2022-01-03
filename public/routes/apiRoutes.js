// Required packages
const router = require('express').Router();
const { notes } = require('../../db/notes.json');
const { newEntry, validateNote, deleteNote } = require('../assets/lib/notes.js');

// Route to retrieve notes from the database and sending back to the client
router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

// Route to process addition of client data
router.post('/notes', (req, res) => {

    // Setting the id of the note to be the next index of the array
    req.body.id = notes.length.toString();

    // Validating the data before doing anything with it
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        // Adding the data to the database
        const note = newEntry(req.body, notes);
        res.json(note);
    }
});

// Route to process a deletion from the database
router.delete('/notes/:id', (req, res) => {

    // Delete data from the database based on id
    deleteNote(req.params.id, notes);
    res.json(notes);
})

module.exports = router;