const fs = require('fs');
const logToolStatus = require('./tools/logToolStatus');
const messagesPerPerson = require('./tools/messagesPerPerson');
const wordFrequency = require('./tools/wordFrequency');

fs.readFile('messages.json', 'utf8', (error, data) => {
  const toolName = 'Main';

  if (error) {
    logToolStatus(toolName, 'error', error);
    return error;
  }
  const conversationIndex = 0;

  const { conversation, participants } = JSON.parse(data)[conversationIndex];
  console.log(wordFrequency(conversation, 15));
  console.log(messagesPerPerson(conversation));
});
