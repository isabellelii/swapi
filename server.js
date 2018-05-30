const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/starwars-angular'));
app.get('/*/', function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, 'public') })
});
app.listen(process.env.PORT || 8080);
