const Discord = require('discord.js')
const { suicide } = require('star-labs')
const db = require('quick.db')
const b = require('../renegados/renegados.js')

module.exports = {
  config: {
    name: 'suicide',
    aliases: [''],
  },
  run: async (client, message) => {
    
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

  return message.channel.send( new Discord.MessageEmbed()
      .setColor('#0f4bff')
      .setImage(suicide())
      .setDescription(`${message.author} **Acaba de se suicidar.** <:Anjinhoo:766816233915940874>`)
      .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    )
  }
}