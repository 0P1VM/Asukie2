const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {
  
  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Faça cócegas em alguém*`)
  .addField(`:hammer: **|** Uso`, `\`${client.config.prefix}cocegas <@user>\``, true)
  .addField(`:book: **|** Exemplo`, `\`${client.config.prefix}cocegas @Asukie\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}tickle\``)
  .setColor('#8500de')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  

    if (!message.mentions.users.first()) return message.channel.send(erro);
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#8500de")
    .setDescription(`${message.author.username} **fez cócegas em** ${message.mentions.users.first().username} <:cocegas:763724557570932786>`)
    .setImage(body.url)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send({embed})
}
exports.help = {
    name: 'cocegas',
    aliases: ['tickle', 'cócegas']
}