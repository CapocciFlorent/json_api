const DocumentsDAL = require('./documentsDAL');
const deepDiff = require('deep-diff');

async function getAll(_, res, next) {
  try {
    const documents = await DocumentsDAL.getAll();

    res.status(200).json(documents);
  } catch (e) {
    next(e);
  }
}

async function getOne(req, res, next) {
  const { id } = req.params;

  try {
    const document = await DocumentsDAL.getOne(id);

    res.status(200).json(document);
  } catch (e) {
    next(e);
  }
}

async function diff(req, res, next) {
  const { firstId, secondId } = req.params;

  try {
    const [doc1, doc2] = await Promise.all([DocumentsDAL.getOne(firstId), DocumentsDAL.getOne(secondId)]);
    const differences = deepDiff(doc1.document, doc2.document);

    if (!differences) res.status(200).json(`Document ${firstId} is identical to Document ${secondId}`);
    res.status(200).json(differences);
  } catch (e) {
    next(e);
  }
}

async function post(req, res, next) {
  const body = req.body;

  try {
    const document = await DocumentsDAL.create(body);

    res.status(201).json(document);
  } catch (e) {
    next(e);
  }
}

async function put(req, res, next) {
  const { id } = req.params;
  const body = req.body;

  try {
    const document = await DocumentsDAL.upsert(id, body);

    res.status(200).json(document);
  } catch (e) {
    next(e);
  }
}

async function patch(req, res, next) {
  const { id } = req.params;
  const body = req.body;

  try {
    const document = await DocumentsDAL.update(id, body);

    res.status(200).json(document);
  } catch (e) {
    next(e);
  }
}

async function remove(req, res, next) {
  const { id } = req.params;

  try {
    const document = await DocumentsDAL.remove(id);

    res.status(200).json(document);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getAll,
  getOne,
  diff,
  post,
  put,
  patch,
  remove,
};
