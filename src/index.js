const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'production';

app.use(compression());
app.use(bodyParser.json());

if (NODE_ENV === 'development') {
  app.use(morgan());
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT} `)
});
