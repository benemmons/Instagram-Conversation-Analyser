<h1 align="center">Instagram Conversation Analyser 🔎</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/benemmons/Instagram-Conversation-Analyser/blob/master/LICENSE">
    <img alt="License: MIT License" src="https://img.shields.io/badge/License-MIT License-yellow.svg" target="_blank" />
  </a>
</p>

> Provides functions to analyse conversation data from Instagram&#39;s downloadable messages.json file.

## Install

```sh
npm install
```

## Usage

1. Request your data from Instagram's [Privacy And Security](https://www.instagram.com/download/request/) page.
2. Download **Part 1** of this data from the email they sent.
3. Extract **messages.json** from this zip file into this project directory.
4. Specify the conversation to be analysed by setting **conversationIndex** in **index.js** (defaults to most recent).
5. Verify the tools use the file correctly by running:
```sh
npm start
```

## Tools

### Messages Per Person

* **Module Name**: messagesPerPerson
* **Functionality**: Counts the quantity of messages each user in the specified conversation has sent.
* **Parameters**: Conversation Object
* **Returns**: Object with schema:

| Key | Value |
| --- | ----- |
| Username (String) | Quantity of Messages (Integer)

### Word Frequency

* **Module Name**: wordFrequency
* **Functionality**: Counts how frequently words are used in a conversation. A minimum frequency is specified for more specific data.
* **Parameters**: Conversation Object, Minimum Frequency (Integer)
* **Returns**: Object with schema:

| Key | Value |
| --- | ----- |
| Word (String) | Frequency of Word (Integer)


## Author

👤 **Ben Emmons**

* Github: [@benemmons](https://github.com/benemmons)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/benemmons/Instagram-Conversation-Analyser/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Ben Emmons](https://github.com/benemmons).<br />
This project is [MIT License](https://github.com/benemmons/Instagram-Conversation-Analyser/blob/master/LICENSE) licensed.
