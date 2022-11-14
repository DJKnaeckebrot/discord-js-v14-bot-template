<<<<<<< HEAD
<h1 align="center">Welcome to NamVr Discord Bot Template 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-v1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/mrdennis1212/discord-js-v14-bot-template#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/mrdennis1212/discord-js-v14-bot-template/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/_zenrl" target="_blank">
    <img alt="Twitter: _zenrl" src="https://img.shields.io/twitter/follow/_zenrl.svg?style=social" />
  </a>
</p>

> An **open source** `discord.js` bot template which is based on official [discord.js guide](https://discordjs.guide/) to get started on making your very personal discord bot!

### 🏠 [Homepage](https://github.com/mrdennis1212/discord-js-v14-bot-template#readme)

## Introduction

This Discord Bot Template is an open source discord.js based bot template to get started on a new bot project. It is classic javascript template, not requiring any external dependencies unlike other famous frameworks. (This is not a framework!)
You can scale any kind of bot project using this template. (single server based or multiple server based) It all depends on your creativity!

### Features:

This template comes in with many in-built useful and flexible features, such as

#### • **Dynamic Event Handler:**

- All events goes inside the [events](https://github.com/mrdennis1212/discord-js-v14-bot-template/blob/master/events/) folder. You don't need to use `client.on()` in the main `bot.js` file to handle events.
- Using simple skeleton code for events, you can make any amount of events in the events folder using the event handler.

#### • **Dynamic Trigger Handler:**

- Triggers occur when a specific "phrase" is said in a message content. For example, if you want your bot to react with :heart: when someone say `welcome` in their message, you can do that with this trigger handler!
- Trigger Handler also has the same skeleton structure as of command handler. The trigger handler is associated with the [triggers](https://github.com/mrdennis1212/discord-js-v14-bot-template/tree/master/triggers/) folder. There are trigger categories, like [reactions](https://github.com/mrdennis1212/discord-js-v14-bot-template/tree/master/triggers/reactions) folder, in the trigger folder.
- A sample trigger command is given in the [`hello.js`](https://github.com/mrdennis1212/discord-js-v14-bot-template/tree/master/triggers/reactions/hello.js) trigger file.

#### • **Dynamic Slash Command Handler:**

- My template comes with a dynamic slash command handler with very easy to customize and make slash commands.
- The commands, in the slashCommands folder, receive an [`CommandInteraction`](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) object. You can see the [documentation of discord.js](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) for all the properties and methods available.
- **IMPORTANT:** In the template, we are sending the slash commands to discord to be registered only to 1 guild. That is because their are 2 types of slash commands, guild and global. Guild commands are restricted to 1 guild but whenever you update them, they take effect immediately, whereas global commands take upto 1 hour to take effect. So use guild commands in development and global commands for production.

#### • **Dynamic Buttons Interaction Handler:**

- This template comes with a dynamic button interaction handler to receive and process button interactions.
- Buttons can be classified in two category folders.

#### • **Dynamic Modals Interaction Handler:**

- Easily handle incoming modal submittions using the template handler!
- Modals can be categorized in different folders.

#### • **Dynamic Context Menu Handler:**

- All new addition to discord API is context menus! You can right click a user or message -> Apps to find these options!
- This template will register all your context menu options and dynamically interact with them! Worth a try.

#### • **[NEW] Dynamic Autocomplete Interaction Request Handler:**

- Easily handle incoming autocomplete requests using the template handler!
- Perfectly dynamic for all your needs!

#### • **Highly Customizable:**

Using the template is so easy and fun, you would know. As the template does not rely on any external dependencies and written in javascript, it is highly customizable to any extend. There's no end to your creativity!

#### • **Open source and self-hosted:**

> It's yours, you have full control.

## Install

```sh
npm install
```

## Configuration

- Rename [`.env.example`](https://github.com/mrdennis1212/discord-js-v14-bot-template/blob/master/.env.example) to `.env` and fill the token and other values. Extend .env according to your needs!

## Run your bot

```sh
npm start
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/mrdennis1212/discord-js-v14-bot-template/issues). You can also take a look at the [contributing guide](https://github.com/mrdennis1212/discord-js-v14-bot-template/blob/master/CONTRIBUTING.md).

## 📝 License

This project is [Apache-2.0](LICENSE) licensed.

---
=======
<h1 align="center">Welcome to NamVr Discord Bot Template 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-v1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/mrdennis1212/discord-js-v14-bot-template#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/mrdennis1212/discord-js-v14-bot-template/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/_zenrl" target="_blank">
    <img alt="Twitter: _zenrl" src="https://img.shields.io/twitter/follow/_zenrl.svg?style=social" />
  </a>
</p>

> An **open source** `discord.js` bot template which is based on official [discord.js guide](https://discordjs.guide/) to get started on making your very personal discord bot!

### 🏠 [Homepage](https://github.com/mrdennis1212/discord-js-v14-bot-template#readme)

## Introduction

This Discord Bot Template is an open source discord.js based bot template to get started on a new bot project. It is classic javascript template, not requiring any external dependencies unlike other famous frameworks. (This is not a framework!)
You can scale any kind of bot project using this template. (single server based or multiple server based) It all depends on your creativity!

### Features:

This template comes in with many in-built useful and flexible features, such as

#### • **Dynamic Event Handler:**

- All events goes inside the [events](https://github.com/mrdennis1212/discord-js-v14-bot-template/blob/master/events/) folder. You don't need to use `client.on()` in the main `bot.js` file to handle events.
- Using simple skeleton code for events, you can make any amount of events in the events folder using the event handler.

#### • **Dynamic Trigger Handler:**

- Triggers occur when a specific "phrase" is said in a message content. For example, if you want your bot to react with :heart: when someone say `welcome` in their message, you can do that with this trigger handler!
- Trigger Handler also has the same skeleton structure as of command handler. The trigger handler is associated with the [triggers](https://github.com/mrdennis1212/discord-js-v14-bot-template/tree/master/triggers/) folder. There are trigger categories, like [reactions](https://github.com/mrdennis1212/discord-js-v14-bot-template/tree/master/triggers/reactions) folder, in the trigger folder.
- A sample trigger command is given in the [`hello.js`](https://github.com/mrdennis1212/discord-js-v14-bot-template/tree/master/triggers/reactions/hello.js) trigger file.

#### • **Dynamic Slash Command Handler:**

- My template comes with a dynamic slash command handler with very easy to customize and make slash commands.
- The commands, in the slashCommands folder, receive an [`CommandInteraction`](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) object. You can see the [documentation of discord.js](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) for all the properties and methods available.
- **IMPORTANT:** In the template, we are sending the slash commands to discord to be registered only to 1 guild. That is because their are 2 types of slash commands, guild and global. Guild commands are restricted to 1 guild but whenever you update them, they take effect immediately, whereas global commands take upto 1 hour to take effect. So use guild commands in development and global commands for production.

#### • **Dynamic Buttons Interaction Handler:**

- This template comes with a dynamic button interaction handler to receive and process button interactions.
- Buttons can be classified in two category folders.

#### • **Dynamic Modals Interaction Handler:**

- Easily handle incoming modal submittions using the template handler!
- Modals can be categorized in different folders.

#### • **Dynamic Context Menu Handler:**

- All new addition to discord API is context menus! You can right click a user or message -> Apps to find these options!
- This template will register all your context menu options and dynamically interact with them! Worth a try.

#### • **[NEW] Dynamic Autocomplete Interaction Request Handler:**

- Easily handle incoming autocomplete requests using the template handler!
- Perfectly dynamic for all your needs!

#### • **Highly Customizable:**

Using the template is so easy and fun, you would know. As the template does not rely on any external dependencies and written in javascript, it is highly customizable to any extend. There's no end to your creativity!

#### • **Open source and self-hosted:**

> It's yours, you have full control.

## Install

```sh
npm install
```

## Configuration

- Rename [`.env.example`](https://github.com/mrdennis1212/discord-js-v14-bot-template/blob/master/.env.example) to `.env` and fill the token and other values. Extend .env according to your needs!

## Run your bot

```sh
npm start
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/mrdennis1212/discord-js-v14-bot-template/issues). You can also take a look at the [contributing guide](https://github.com/mrdennis1212/discord-js-v14-bot-template/blob/master/CONTRIBUTING.md).

## 📝 License

This project is [Apache-2.0](LICENSE) licensed.

---
>>>>>>> 06a902b51a245ae66ae7211893143ed7f1678688
