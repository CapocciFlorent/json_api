const DocumentModel = require('../documents/documentModel');
const APIError = require('../APIError');

async function getAll() {
  const documents = await DocumentModel.findAll();

  if (!documents) {
    throw new APIError(
      {
        name: 'document_not_found',
        httpCode: 404,
        details: [`Documents cannot be found`],
      },
      true,
    );
  }
  return documents;
}

async function getOne(id) {
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
  return document;
}

async function create() {

}

async function update() {

}

async function remove() {

}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
