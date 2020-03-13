class ErrorHandler {
  static async handleError(err) {
    if (err.isOperational) return;
    console.log(err);
  }
}

module.exports = ErrorHandler;
