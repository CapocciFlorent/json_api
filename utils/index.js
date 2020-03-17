
function jsonParser(payload) {
  try {
    return JSON.parse(payload);
  } catch (e) {
    return payload;
  }
}

module.exports = {
  jsonParser,
};
