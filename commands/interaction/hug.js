const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Dê um abraço em alguém*`)
  .addField(`:hammer: **|** Uso`, `\`${client.config.prefix}hug <@user>\``, true)
  .addField(`:book: **|** Exemplo`, `\`${client.config.prefix}hug @Asukie™\``, true)
  .addField(`:bookmark: **|** Permissão`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **|** Alternativas`, `\`${c.prefix}hug\``)
  .setColor('#8500de')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

    if (!message.mentions.users.first()) return message.channel.send(erro);
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/hug");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#8500de")
    .setDescription(`${message.author.username} **deu um abraço em** ${message.mentions.users.first().username} <a:Abraco:761838210602237952>`)
    .setImage(body.url) 
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send({embed})
}
exports.help = {
    name: 'hug',
    aliases: ['abracar', 'abraçar', 'abraco', 'abraço']
}