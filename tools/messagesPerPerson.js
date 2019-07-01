const lodash = require('lodash');
const logToolStatus = require('./logToolStatus');

module.exports = (conversation) => {
  const toolName = 'Messages Per Person';

  let messagesPerPerson;
  try {
    messagesPerPerson = lodash.countBy(conversation, message => message.sender);
    if (messagesPerPerson.undefined) {
      throw new Error('No valid people were found.');
    }
  } catch (error) {
    logToolStatus(toolName, 'error', error);
    return error;
  }
  logToolStatus(toolName, 'success');
  return messagesPerPerson;
};
