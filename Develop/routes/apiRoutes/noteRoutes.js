const router = require('express').Router();
// routes notes to db.json folder
const { 
    notes
} = require('../../db/db.json');
// create and deleting notes
const {
    notesCreateNewNote,
    noteDeleteNote
} = require('../../library/noteFunc.js');
// saving notes to db.json
router.get('/notes', (req, res) => {
    let saved = notes;
    // i had res.join instead of res.json
    res.json(saved);
})

router.post('/notes', (req, res) => {
    // notes length is an error
    req.body.id = notes.length.toString();
    let note = notesCreateNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;