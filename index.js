const express = require('express');
const app = express();
const containerId=process.env.HOSTNAME;

app.use('/',  (req, res) => {
  res.send(`Hello World from <code>${containerId}</code>!`)
});

app.listen(3000,  () => {
  console.log(`Example app ${containerId} listening on port 3000`)
});

process.on('SIGTERM', ()=> {
  console.log(`Terminated (SIGTERM): ${containerId}`);
  process.exit(0)
});
