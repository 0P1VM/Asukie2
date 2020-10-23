const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'depositar',
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


        let user = message.author;

        let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let member2 = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
      
        if (args[0] == 'all') {
          let money = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
          let bank = await db.fetch(`bank_${message.guild.id}_${message.author.id}`)
      
          let embedbank = new Discord.MessageEmbed()
          .setColor('#0f4bff')
          .setDescription("<a:Asukie_Errado:767937012287537163> **|** Você não tem dinheiro para depositar.")
      
          if(money === 0) return message.channel.send(embedbank)
      
          db.add(`bank_${message.guild.id}_${message.author.id}`, money)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, money)
          let embed5 = new Discord.MessageEmbed()
        .setColor("#0f4bff")
        .setDescription(` **|** Você depositou todo o seu dinheiro no banco.`);
        message.channel.send(embed5)
        
        } else {
        
        let embed2 = new Discord.MessageEmbed()
        .setColor("#0f4bff")
        .setDescription(`<:Asukie_atencao:766406396337193020> **|** Diga uma quantidade para depositar.`);
        
        if (!args[0]) {
            return message.channel.send(embed2)
            .catch(err => console.log(err))
        }
        let embed3 = new Discord.MessageEmbed()
        .setColor("#0f4bff")
        .setDescription(`<a:Asukie_Errado:767937012287537163> **|** Você não pode depositar números negativos.`);
      
        if (message.content.includes('-')) { 
            return message.channel.send(embed3)
        }
        let embed4 = new Discord.MessageEmbed()
        .setColor("#0f4bff")
        .setDescription(`<a:Asukie_Errado:767937012287537163> **|** Você não tem tudo isso de dinheiro para depositar.`);
      
        if (member < args[0]) {
            return message.channel.send(embed4)
        }
      
        let embed5 = new Discord.MessageEmbed()
        .setColor("#0f4bff")
        .setDescription(`<a:Asukie_Certo:766437760381878282> **|** Você depositou ${args[0]} em seu banco.`);
      
        message.channel.send(embed5)
        db.add(`bank_${message.guild.id}_${message.author.id}`, args[0])
        db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0])


        }
    }
}