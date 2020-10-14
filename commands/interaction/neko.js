const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/ngif");
    
    let embed = new Discord.MessageEmbed()
    .setColor("#8500de")
    .setDescription(`<:nekoniii:763847144226029598> **Neko-niiii**`)
    .setImage(body.url)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send({embed})

}
exports.help = {
    name: 'neko',
    aliases: []
}