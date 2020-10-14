module.exports = (client, message) => {
  const Discord = require('discord.js')

  if(message.author.bot) return;
  if (message.channel.type == "dm") return;

	let marcou = new Discord.MessageEmbed()
  .setTitle(`**<:duvida:762803797109506059> | Está perdido(a), ${message.author.username} ?**`)
	.setDescription(
	`**<:seta1:762492762192478216> Eu me chamo ${client.user.username} e sou um bot com várias funções, criado para ajudar o seu servidor! <a:brilho:761081098368581632>**\n` +
  ``)
	.setThumbnail('https://cdn.discordapp.com/emojis/739200876752797697.png?v=1')
	.addFields(
	{ name: `<:prefixo:753242439698874388> **| Meu prefixo:**`, value: `ㅤ\`${client.config.prefix}\``, inline: true },
  { name: `<a:aviso:758897403277082654> **| Comando de ajuda:**`, value: `ㅤ\`${client.config.prefix}help\``, inline: true },
	)
	.setFooter(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))
	.setColor(`#8500de`)
	.setTimestamp();
	
  if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`))
  if(message.content.includes(`<@!${client.user.id}>`) || message.content.includes(`<@${client.user.id}>`)) {
    message.channel.send(`${message.author}`, marcou)
  }

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmdmoderation = client.moderation.get(command)
  const cmdinteracion = client.interaction.get(command)
  const cmdutils = client.utils.get(command)
  const cmdconfiguration = client.configuration.get(command)

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  if(cmdmoderation){
    message.delete();
    cmdmoderation.run(client, message, args)
  }
  if(cmdutils){
    message.delete();
    cmdutils.run(client, message, args)
  } 
  if(cmdinteracion){
    message.delete();
    cmdinteracion.run(client, message, args)
  } 
  if(cmdconfiguration){
    message.delete();
    cmdconfiguration.run(client, message, args)
  } else {
    message.channel.send('Esse comando não existe')
  }
}