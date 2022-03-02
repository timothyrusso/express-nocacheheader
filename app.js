const path = require('path');
const express = require('express');
const { setNoCacheHeaders } = require('./middleware.js')


const { PORT = 3000, BASE_PATH } = process.env;
const app = express();
app.use(setNoCacheHeaders)

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Link to the server');
  console.log(BASE_PATH);
});
