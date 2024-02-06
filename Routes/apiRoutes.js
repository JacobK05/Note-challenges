const path = require('path')
const fs = require('fs')
const router = require('express').Router()
const uniqid = require('uniqid'); 




router.get('/notes', (req, res) => {
   const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
   res.json(notes);
 });

router.post('/notes', (req, res) => {

   const newNote = {
   title: req.body.title,
   text: req.body.text,
   newNote_id: uniqid()
   }
   
   const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
   notes.push(newNote)
   fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2))
   res.json(newNote)
   
})

router.delete('/api/notes/:id', (req, res ) => {
const noteId = req.params.id;
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
  notes = notes.filter((note) => note.id !== noteId);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2));
  res.json({ message: 'Note deleted' });
})



module.exports = router