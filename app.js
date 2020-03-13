const express = require('express');
const bodyParser = require('body-parser');

const documentsRouter = require('./routes/documents');
const documentationRouter = require('./routes/documentation');
const errorHandler = require('./errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/documentation', documentationRouter);
app.use('/', documentsRouter);

app.use(async (err, _, res, next) => {
  await errorHandler.handleError(err);

  res.status(err.httpCode).json(err.sanitize());
  next();
});

module.exports = app;
