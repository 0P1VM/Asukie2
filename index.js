const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const request = require("request");
const db = require('quick.db');

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@!${client.user.id}>`)
  )
    return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    message.delete();
  }
})

client.on("ready", () => {
  console.log(`Iniciado em ${client.user.tag}\n\n`)
var tabela = [
      {
      name: `Saiba como me adicionar pelo ${config.prefix}ajuda`,
      type: "STREAMING",
      url: "https://www.twitch.tv/asukie"
    },
	{
		name: `Encontrou falhas? Reporte para o suporte.`,
		type: "STREAMING",
		url: "https://www.twitch.tv/asukie"
	},
	{
		name: `em ${client.guilds.cache.size} servidores 💙`,
		type: "STREAMING",
		url: "https://www.twitch.tv/asukie"
	},
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity(altstatus);
  }

  setStatus();
  setInterval(() => setStatus(), 1000);
console.log(`Servidores: ${client.guilds.cache.size}\nUsuários: ${client.users.cache.size}`)
})

client.on('message', message => {
	 if (message.author.bot) return;
  if (message.channel.type == "dm") return;
	let marcou = new Discord.MessageEmbed()
  .setTitle(`**<a:curioso:760366016495616030> | Está perdido(a), ${message.author.username} ?**`)
	.setDescription(
	`**<:SetaZu:765288356913086484> Eu me chamo ${client.user.username} e sou um bot com várias funções, criado para ajudar o seu servidor! <a:brilhob:758108174187233290>**\n` +
  ``)
	.setThumbnail('https://cdn.discordapp.com/emojis/739200876752797697.png?v=1')
	.addFields(
	{ name: `<:prefixo:753242439698874388> **| Meu prefixo:**`, value: `ㅤ\`${config.prefix}\``, inline: true },
  { name: `<a:aviso:758897403277082654> **| Comando de ajuda:**`, value: `ㅤ\`${config.prefix}help\``, inline: true },
		)
		.setFooter(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))
		.setColor(`#0f4bff`)
		.setTimestamp();
	
   if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`))
    if(message.content.includes(`<@!${client.user.id}>`) || message.content.includes(`<@${client.user.id}>`)) {
        message.channel.send(`${message.author}`, marcou)
      }
    })

client.login(config.token);