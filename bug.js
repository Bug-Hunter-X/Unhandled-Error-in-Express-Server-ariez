const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This code is missing error handling. If there is an error while the server is starting up, it will crash without any indication of what went wrong.  This is a common problem but often overlooked.