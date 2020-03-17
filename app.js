const express = require('express');
const bodyParser = require('body-parser');

const documentsRouter = require('./routes/documents');
const documentationRouter = require('./routes/documentation');
const { handleError } = require('./errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/documentation', documentationRouter);
app.use('/', documentsRouter);

app.use(async (err, _, res, next) => {
  const errResponse = await handleError(err);

  res.status(err.httpCode || err.statusCode).json(errResponse);
  next();
});

module.exports = app;
