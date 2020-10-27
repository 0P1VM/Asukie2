const Discord  = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const request = require("request");
const db = require('quick.db');
const dbm = require('mongoose')
const bl = require('./utils/blacklist.json')
const cooldowns = new Discord.Collection()

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@!${client.user.id}>`)
  )
    return;

  let embed = new Discord.MessageEmbed()
  .setDescription(`<:Asukie_atencao:766406396337193020> **|** O comando não existe, utilize \`${config.prefix}ajuda\` para mais informações.`)
  .setColor("#0f4bff")
  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();
if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(
        `> ${message.author}. Espere \`${timeLeft.toFixed()}\` segundo(s) para utilizar um comando novamente.`
      ).then(m => {
m.delete({timeout: 6000})
})
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

const logg = new Discord.WebhookClient('770083731520094208', 'jsbJe_k6H10iPBaXgr1Gb71S2fFfedv-RMw1TzGHLjUWawMSVEDn7k0nK-yf1pavPwhl')
let cmdlog = new Discord.MessageEmbed()
.setColor('#0f4bff')
.setAuthor(`${client.user.username} | Commands`, client.user.displayAvatarURL({dynamic:true}))
.setThumbnail('https://cdn.discordapp.com/emojis/753979367360692274.png?v=1')
.setDescription(`**<:Kali:758857635205742633> Autor:**\nㅤ<:blueseta2:770111511255056395> Nome: \`${message.author.tag}\`\nㅤ<:blueseta2:770111511255056395> ID: \`${message.author.id}\`\n`+ 
 `**<:Info_3:768616100593270794> Servidor:**\nㅤ<:blueseta2:770111511255056395> Nome: \`${message.guild.name}\`\nㅤ<:blueseta2:770111511255056395> ID: \`${message.guild.id}\`\n` +
 `ㅤ\nㅤㅤㅤ<:livro_asukie_7_muda_a_cor:770111800346804245> **Comando efetuado:**ㅤㅤㅤ\nㅤ\`\`\`md\n# ${config.prefix}${command} ${args}\`\`\``)
.setFooter(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()

logg.send(cmdlog)

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
  const iniciado = new Discord.WebhookClient('770424217665536070', 'FjgUJeb_tsEH3GWJOgNCZbbyZsBGvIT_AzVHDElk_7bDHexwEIJUf98ck6aaQk0MGqx8')
  let inc = new Discord.MessageEmbed()
.setColor('#0f4bff')
 .setAuthor(`${client.user.username} | Iniciada`, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail('https://cdn.discordapp.com/emojis/765932202550362132.gif?v=1')
.setDescription(`\`\`\`md\n# Usuários: ${client.users.cache.size}\`\`\`\n` +
`\`\`\`md\n# Servidores: ${client.guilds.cache.size}\`\`\``)
.setFooter(`${client.user.tag}`, client.user.displayAvatarURL({dynamic: true}))
.setTimestamp()
iniciado.send(inc)

  console.log(`Iniciado em ${client.user.tag}\n\n`)
var tabela = [
    {
    name: `Halloween 🎃`,
     type: "STREAMING",
     url: "https://www.twitch.tv/asukie"
    },
    {
    name: `Saiba como me adicionar pelo ${config.prefix}invite`,
    type: "STREAMING",
    url: "https://www.twitch.tv/asukie"
   },
	 {
		name: `Encontrou falhas? utilize o comando ${config.prefix}bug`,
		type: "STREAMING",
		url: "https://www.twitch.tv/asukie"
	 },
   {
   name: `Dúvidas? ${config.prefix}ajuda e veja os meus comandos.`,
   type: "STREAMING",
   url: "https://www.twitch.tv/asukie"
   },
	 {
		name: `${client.guilds.cache.size} Servidores! Obrigado a todos por me adicionarem 💙`,
		type: "LISTENING",
		url: "https://www.twitch.tv/asukie"
	 },
  {
		name: `Alguma sugestão? utilize o comando ${config.prefix}sugestao`,
		type: "LISTENING",
		url: "https://www.twitch.tv/asukie"
	},
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity(altstatus);
  }

  setStatus();
  setInterval(() => setStatus(), 10000);
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
	.setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770478885007392768/AsukieInterrogacao.png')
	.addFields(
	{ name: `Meu prefixo`, value: ` \`${config.prefix}\``, inline: true },
  { name: `Comando de ajuda`, value: ` \`${config.prefix}ajuda\``, inline: true },
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