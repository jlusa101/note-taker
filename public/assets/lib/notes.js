const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

function newEntry(body, noteArray) {
    const note = body;
    noteArray.push(note);
    updateDatabase(noteArray);
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(noteId, noteArray) {
    noteArray.splice(noteId, 1);
    updateDatabase(noteArray);
}

function updateDatabase(noteArray) {

    for (let i = 0; i < noteArray.length; i++) {
        noteArray[i].id = i;
    }

    fs.writeFileSync(
        path.join(__dirname, '../../../db/notes.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
};

module.exports = { newEntry, validateNote, deleteNote };