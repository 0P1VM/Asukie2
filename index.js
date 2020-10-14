const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const request = require("request");
const db = require('quick.db');
const Enmap = require('Enmap');
const fs = require('fs')

client.config = config

client.moderation = new Enmap()
client.interaction = new Enmap()
client.utils = new Enmap()
client.configuration = new Enmap()

fs.readdir("./events/", (err, files) => {
  if(err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client))
  });
});



fs.readdir("./commands/moderation/", (err, files) => {
  if(err) return console.log(err);
  files.forEach(file => {
    if(!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`)
    let commandName = file.split(".")[0];
    client.moderation.set(commandName, props);
  });
});

fs.readdir("./commands/interaction/", (err, files) => {
  if(err) return console.log(err);
  files.forEach(file => {
    if(!file.endsWith(".js")) return;
    let props = require(`./commands/interaction/${file}`)
    let commandName = file.split(".")[0];
    client.interaction.set(commandName, props);
  });
});

fs.readdir("./commands/utils/", (err, files) => {
  if(err) return console.log(err);
  files.forEach(file => {
    if(!file.endsWith(".js")) return;
    let props = require(`./commands/utils/${file}`)
    let commandName = file.split(".")[0];
    client.utils.set(commandName, props);
  });
});

fs.readdir("./commands/configuration/", (err, files) => {
  if(err) return console.log(err);
  files.forEach(file => {
    if(!file.endsWith(".js")) return;
    let props = require(`./commands/configuration/${file}`)
    let commandName = file.split(".")[0];
    client.configuration.set(commandName, props);
  });
});

client.login(config.token);