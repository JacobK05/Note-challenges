const express = require("express")


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());


require('./Routes/apiRoutes')(app)

require('./Routes/htmlRoute')(app)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);