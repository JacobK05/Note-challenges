const path = require('path')
const fs = require('fs')
const router = require('express').Router()
const uniqid = require('uniqid'); 





router.get('/api/notes', (req, res) => {
 res.sendFile(path.join(__dirname, '../db/db.json'))
})

router.post('/api/notes', (req, res) => {

    
   const stringNote = JSON.stringify(newNote);

   fs.writeFile('./db/db.json', stringNote, (err) => {
     if (err) {
       console.error(err);
       res.status(500).json({ error: 'Failed to save note' });
     } else {
       res.json(newNote);
     }
   });
 })
 
module.exports = router