const Discord = require('discord.js')

    module.exports.run = (client, message, args) => {
       message.delete();
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`> <a:errado:753245066965024871> **|** Oops! Eu não tenho a permissão para \`Gerenciar Canais\``).then(m => {
    m.delete({timeout : 7000})
    });
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`> <a:errado:753245066965024871> **|** Oops! Você não tem a permissão de \`Gerenciar Canais\``).then(m => {
    m.delete({timeout : 7000})
    });

let a1 = new Discord.MessageEmbed()
.setDescription(`**Este canal foi desbloqueado por ${message.author}.**`)
.setColor("#8500de")
.setFooter(`${message.guild.name}`, message.guild.iconURL())
.setTimestamp();
      var unlock = message.channel.updateOverwrite(message.guild.roles.everyone, {SEND_MESSAGES: true})
                 message.channel.send(a1).then(m => {
    m.delete({timeout : 7000})
    });
        }

module.exports.help = {
    name: "unlock"
  }