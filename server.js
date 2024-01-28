// importing express and add built in node path
const express = require("express")
const path = require('path')
// intisallizing express 
const app = express;
const PORT = 3001;
// middle ware pointing to the public folder 
app.use(express.static('public'));
// get calls 
app.get('/', (req, res) => res.send)('default api')

app.get('/notes', (req , res) =>
res.send(path.join(__dirname, 'public/notes.html'))
)




 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);