const signale = require('signale');

module.exports = (tool, status, errorMessage) => {
  switch (status) {
    case 'success':
      signale.success({ prefix: `[${tool}]`, message: 'Operation success' });
      break;

    case 'error':
      signale.fatal({ prefix: `[${tool}]`, message: errorMessage });
      break;

    default:
      break;
  }
};
