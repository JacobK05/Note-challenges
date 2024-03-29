const express = require("express")
const apiRoutes = require("./Routes/apiRoutes")
const htmlRoutes = require("./Routes/htmlRoutes")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);