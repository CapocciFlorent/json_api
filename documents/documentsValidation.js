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
    const apiErr = new APIError();

    apiErr.fromJoi(e);
    next(apiErr);
  }
}

async function put(req, _, next) {
  const putSchema = Joi.object({
    document: Joi.string().required(),
  });

  const { id } = req.params;
  const { body } = req;

  try {
    await idSchema.validateAsync(id);
    await putSchema.validateAsync(body);
    next();
  } catch (e) {
    const apiErr = new APIError();

    apiErr.fromJoi(e);
    next(apiErr);
  }
}

async function patch(req, _, next) {
  const patchSchema = Joi.object({
    document: Joi.string().required(),
  });

  const { id } = req.params;
  const { body } = req;

  try {
    await idSchema.validateAsync(id);
    await patchSchema.validateAsync(body);
    next();
  } catch (e) {
    const apiErr = new APIError(e);

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
    const apiErr = new APIError(e);

    apiErr.fromJoi(e);
    next(apiErr);
  }
}

module.exports = {
  getAll,
  getOne,
  diff,
  put,
  patch,
  post,
  remove,
};
