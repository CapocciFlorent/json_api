async function handleError(err) {
  if (err.isOperational) return err.sanitize();
  console.log(err);
  return 'Internal Error';
}

module.exports = {
  handleError
};
