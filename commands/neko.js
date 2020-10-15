const Discord = require('discord.js');
const superagent = require('superagent');
const db = require('quick.db')

exports.run = async (client, message, args) => {
message.delete();

var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let mnt = new Discord.MessageEmbed()

.setDescription(`**Olá, ${message.author}**\n` +
                `\nNo momento fui enviada para outra galáxia\n` + 
				`Em breve voltarei a responder por seus comandos.`)
.setThumbnail('https://i.pinimg.com/originals/91/de/b5/91deb532d34761aaf73e43c758dc5446.png')
.setColor(`#0f4bff`)
      
     return message.channel.send(mnt)
      
    } 

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/ngif");
    
    let embed = new Discord.MessageEmbed()
    .setColor("#0f4bff")
    .setDescription(`<:nekoniii:763847144226029598> **Neko-niiii**`)
    .setImage(body.url)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send({embed})

}
exports.help = {
    name: 'neko',
    aliases: []
}