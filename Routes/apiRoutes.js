const path = require('path')
const fs = require('fs')
const router = require('express').Router()
const uniqid = require('uniqid'); 




router.get('/api/notes', (req, res) => {
   const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
   res.json(notes);
 });

router.post('/api/notes', (req, res) => {

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

module.exports = router