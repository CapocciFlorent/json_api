const Joi = require('@hapi/joi');
const APIError = require('../APIError');

const idSchema = Joi.string().uuid();

async function getAll(_, __, next) {
  next();
}

async function getOne(req, _, next) {
  const { id } = req.params;

  try {
    await idSchema.validateAsync(id);
    next();
  } catch (e) {
    const apiErr = new APIError();

    apiErr.fromJoi(e);
    next(apiErr);
  }
}

async function diff(req, _, next) {
  const { firstId, secondId } = req.params;

  try {
    await idSchema.validateAsync(firstId);
    await idSchema.validateAsync(secondId);
    next();
  } catch (e) {
    const apiErr = new APIError();

    apiErr.fromJoi(e);
    next(apiErr);
  }
}

async function post(req, _, next) {
  const postSchema = Joi.object({
    document: Joi.string().required(),
  });

  const { body } = req;

  try {
    await postSchema.validateAsync(body);

    next();
  } catch (e) {
    const apiErr = new APIError

    apiErr.fromJoi(e);
    next(apiErr);
  }
}

async function remove(req, _, next) {
  const { id } = req.params;

  try {
    await idSchema.validateAsync(id);

    next();
  } catch (e) {
    const apiErr = new APIError();

    apiErr.fromJoi(e);
    next(apiErr);
  }
}

module.exports = {
  getAll,
  getOne,
  diff,
  post,
  remove,
};
