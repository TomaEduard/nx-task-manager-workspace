// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


const tasks = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];

app.get('/url', (req, res, next) => {
  res.json(tasks);
});


