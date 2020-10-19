const Discord = require('discord.js')
const db = require('quick.db')
const b = require('../renegados/renegados.js')

module.exports.run = async (client, message, args) => {
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

    let member = message.mentions.users.first();

    if (!member) member = message.author

    message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#')
        .setDescription(`${member} **sua porcentagem é \`${ran(0, 100)}%\` de ser gay!** <:Asukie_Frioo:767176226694627349>`)
        .setImage('https://shangay.com/sites/default/files/gay__1__by_pride_flags-d8zu7qj.png')
    );
   
}

function ran(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.help = {
    name:"gay"
} 
