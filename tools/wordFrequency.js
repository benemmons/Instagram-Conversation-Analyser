const lodash = require('lodash');
const logToolStatus = require('./logToolStatus');

module.exports = (conversation, minFrequency) => {
  const toolName = 'Messages Per Person';
  let filteredWordFrequency;
  try {
    let allWords = [];
    lodash.forEach(conversation, (message) => {
      if (message.text) {
        allWords = allWords.concat(message.text.toLowerCase().split(' '));
      }
    });
    const wordFrequency = lodash.countBy(allWords);
    filteredWordFrequency = lodash.pickBy(wordFrequency, (word) => {
      return word > minFrequency;
    });
  } catch (error) {
    logToolStatus(toolName, 'error', error);
    return error;
  }
  logToolStatus(toolName, 'success');
  return filteredWordFrequency;
};
