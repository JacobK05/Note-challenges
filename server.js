// importing express and add built in node path
const express = require("express")
const path = require('path')
const fs = require('fs')
// intisallizing express
const uuid = require('./helpers/uuid');
const app = express();
const PORT = 3001;
// middle ware pointing to the public folder 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json())

module.exports = (app) =>{
// get calls
app.get('*', (req , res) =>
res.send(path.join(__dirname, '../public/notes.html'))
)

app.get('/notes', (req , res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
)

app.get('/api/notes', (req, res) => {
 res.sendFile(path.join(__dirname, '../db/db.json'))
})

app.post('api/notes', (req, res) => {

const { title, text } = req.body

if (title && text){
 const newNote = {
    title,
    text,
    review_id: uuid()
 }
}

})


};



 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);