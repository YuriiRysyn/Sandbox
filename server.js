const express = require('express');
const app = express();
const port = 5000;


app.get('/api', (req, res) => {
  res.send(JSON.stringify({ x: 1, y: 3 }));
});

// app.use(express.static('build'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
