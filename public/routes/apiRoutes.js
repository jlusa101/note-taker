const router = require('express').Router();
const { notes } = require('../../db/notes.json');
const { newEntry, validateNote, deleteNote } = require('../assets/lib/notes.js');

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req, res) => {
    // Settiung the id of the note to be the next index of the array
    req.body.id = notes.length.toString();
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = newEntry(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const result = deleteNote(id, notes);
    console.log(result);
})

module.exports = router;