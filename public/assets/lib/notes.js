// Required packages
const fs = require('fs');
const path = require('path');

// Function that adds a new note to the database
function newEntry(newNote, noteArray) {
    const note = newNote;

    // Pushing the new note into the notes array
    noteArray.push(note);

    // Update the database
    updateDatabase(noteArray);
    return note;
}

// Function that validates the new note
function validateNote(note) {

    // Validating the new note
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

// Function that removes a note from the database
function deleteNote(noteId, noteArray) {

    // Remove the data based on its ID
    noteArray.splice(noteId, 1);

    // Update the database
    updateDatabase(noteArray);
}

// Function that updates the database
function updateDatabase(noteArray) {

    // Adjust note IDs
    for (let i = 0; i < noteArray.length; i++) {
        noteArray[i].id = i;
    }

    // Writing to the database
    fs.writeFileSync(
        path.join(__dirname, '../../../db/notes.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
};

module.exports = { newEntry, validateNote, deleteNote };