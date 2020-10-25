const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const request = require("request");
const db = require('quick.db');
const dbm = require('mongoose')
var blockedUsers = ['729854282521903165', '348202483098583052'];

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@!${client.user.id}>`)
  )
    return;

if (blockedUsers.includes(message.author.id) || (message.author.bot)) return message.delete();
  let embed = new Discord.MessageEmbed()
  .setDescription(`<:Asukie_atencao:766406396337193020> **|** O comando não existe, utilize \`${config.prefix}ajuda\` para mais informações.`)
  .setColor("#0f4bff")
  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();
let cmdlog = new Discord.MessageEmbed()
.setColor('#0f4bff')
.setAuthor(`${client.user.username} | Log`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`**<:Info_1:768615897891078164> Autor:** \`${message.author.tag}\` **/** \`${message.author.id}\`\n`+ 
`\n<:ModulE:762729478757023834>  **Comando executado:** \`${config.prefix}${command}\``)
.setFooter(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()

 const canal = client.channels.cache.get('769739393140260874').send(cmdlog)
  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    message.delete();
  message.channel.send(embed).then(m => {
      m.delete({ timeout: 9000 });
    });
    

    
  }
})

client.on("ready", async () => {
  console.log(`Iniciado em ${client.user.tag}\n\n`)
var tabela = [
  {
      name: `Halloween 🎃`,
      type: "WATCHING",
      url: "https://www.twitch.tv/asukie"
    },
    {
      name: `Saiba como me adicionar pelo ${config.prefix}ajuda`,
      type: "STREAMING",
      url: "https://www.twitch.tv/asukie"
    },
	{
		name: `Encontrou falhas? use o comando ${config.prefix}bug e descreva-o.`,
		type: "PLAYING",
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