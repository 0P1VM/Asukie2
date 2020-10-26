const Discord = require('discord.js');

    exports.run = async (client, message, args) => {
        const roles = new Discord.MessageEmbed()
        .setTitle(`Asukie™ | ListRole`)//${message.guild.name}
        .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/770068199244300338/numbered_list1600.png")
        .setDescription(message.guild.roles.cache.map(r => `${r}`).join(", "))
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setColor("#0f4bff")
        message.channel.send(roles).then(m => {
        //await message.channel.send(roles).then(m => {
//m.delete({timeout: 15000})
    }
                                               )}