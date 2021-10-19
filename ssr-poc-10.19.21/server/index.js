const ejs = require('ejs');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});

app.get('/', (req, res) => {
    res.send(html)
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })