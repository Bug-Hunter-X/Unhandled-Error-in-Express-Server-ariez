const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) {
    console.error(`Failed to start server: ${err}`);
    process.exit(1); // Exit with a non-zero code to indicate failure
  } else {
    console.log(`Server listening on port ${port}`);
  }
});