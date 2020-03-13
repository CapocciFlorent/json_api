const DocumentModel = require('../documents/documentModel');
const APIError = require('../APIError');

async function getAll() {
  const documents = await DocumentModel.findAll();

  if (!documents || !documents.length) {
    throw new APIError(
      {
        name: 'document_not_found',
        httpCode: 404,
        details: [`Documents cannot be found`],
      },
      true,
    );
  }
  return documents.map(document => document.toResponse(document));
}

async function getOne(id) {
  const document = await DocumentModel.findByPk(id);

  if (!document) {
    throw new APIError(
      {
        name: 'document_not_found',
        httpCode: 404,
        details: [`Document with id ${id} cannot be found`],
      },
      true,
    );
  }
  return document.toResponse(document);
}

async function create(properties) {
  const document = await DocumentModel.create({ ...properties });

  return document.toResponse(document);
}

async function update() {

}

async function remove(id) {
  const document = await DocumentModel.findByPk(id);

  if (!document) {
    throw new APIError(
      {
        name: 'document_not_found',
        httpCode: 404,
        details: [`Document with id ${id} cannot be found and therefore wasn't deleted`],
      },
      true,
    );
  }
  await document.destroy();
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
