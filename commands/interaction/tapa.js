const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {

    if (!message.mentions.users.first()) return message.channel.send(`<a:errado:753245066965024871> **|** ${message.author.username}, você precisa mencionar um membro.`);
    if (message.mentions.users.first().id === "749044223692767302") return message.reply('por que deseja me bater? O que eu te fiz?! <a:AsukieTriste:762818165125152788>');
    if (message.mentions.users.first().id === "719944880800923690") return message.reply('não deixarei você bater em meu papai! <a:brava:762817993449144351>');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#8500de")
    .setDescription(`${message.author.username} **deu um tapa em** ${message.mentions.users.first().username} <a:tapa:762706444226396168>`)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setImage(body.url) 
    message.channel.send({embed})
}
exports.help = {
    name: 'tapa',
    aliases: ['slap']
}   