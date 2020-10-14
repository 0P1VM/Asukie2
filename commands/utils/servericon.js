const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (message.deletable) message.delete()
    let servericon = new Discord.MessageEmbed()

    .setAuthor(`Asukie™`, 'https://images-ext-1.discordapp.net/external/V2KiK_UQ9rHOl6-78oDKWTC1XsYOy_qQR5tjojlUxng/%3Fv%3D1/https/cdn.discordapp.com/emojis/760949427648725022.gif')
    .setDescription(`**${message.guild.name}**`)
    .setImage(message.guild.iconURL({size: 1024, dynamic: true}))
    .setColor('#8500de')
   .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

    message.channel.send(servericon);

}

exports.help = {
    name: 'servericon',
    aliases: ['ícone', 'icon']
}