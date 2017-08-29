require('dotenv').config();

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('errorhandler');

const app = express();

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(compression());
app.use(bodyParser.json());

if (NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.get('/', (req, res) => {
  res.json({ id: 1, message: 'Hello world!' });
});

app.get('/error', (req, res) => {
  throw Error('ABORT');
});

app.use((req, res, next) => {
  res.status(404).send('We ain\'t found shit');
});

if (NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    res.status(500).send('Shit\'s broke yo');
  });
}

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT} `)
});
