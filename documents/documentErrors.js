
const NOT_FOUND = {
  name: 'document_not_found',
  httpCode: 404,
  details: [`Document with id cannot be found and therefore wasn't deleted`],
};

module.exports = {
  NOT_FOUND,
};
