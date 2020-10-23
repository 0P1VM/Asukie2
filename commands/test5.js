const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')


module.exports = {
    name: 'mensal',
    cooldown: 5,
	run: async (client, message, args) => {
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


    let timeout = 2592000000 // 30 days in milliseconds, change if you'd like.
    let amount = Math.floor(Math.random() * 5000) + 1;
   
    let monthly = await db.fetch(`monthly_${message.author.id}`);

    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
        let time = ms(timeout - (Date.now() - monthly));

        message.channel.send(`<:Asukie_atencao:766406396337193020> **|** Você já coletou sua recompensa mensal, volte em **${time.days}** dias, **${time.hours}** horas, **${time.minutes}** minutos, **${time.seconds}** segundos.`)
    } else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`**Recompensa Mensal**`)
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/768196004985176114/03.png')
    .addField(`Valor:`, amount)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor('#0f4bff')

    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    db.set(`monthly_${message.author.id}`, Date.now())
        
        }
    }

}