const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'sacar',
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

    let member = db.fetch(`money_${message.guild.id}_${user.id}`)
    let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

    if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
    .setColor("#0f4bff")
    .setDescription(`<a:Asukie_Certo:766437760381878282> **|** Você retirou todo o seu dinheiro do banco.`);
    message.channel.send(embed5)

    } else {

    let embed2 = new Discord.MessageEmbed()
    .setColor("#0f4bff")
    .setDescription(`<:Asukie_atencao:766406396337193020> **|** Diga um valor para sacada.`);

    if (!args[0]) {
        return message.channel.send(embed2)
    }
    let embed3 = new Discord.MessageEmbed()
    .setColor("#0f4bff")
    .setDescription(`<a:Asukie_Errado:767937012287537163> **|** Você não pode retirar valores negativos.`);

    if (message.content.includes('-')) { 
        return message.channel.send(embed3)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#0f4bff")
    .setDescription(`<a:Asukie_Errado:767937012287537163> **|** Você não tem tudo isso de dinheiro para retirar.`);

    if (member2 < args[0]) {
        return message.channel.send(embed4)
    }

    let embed5 = new Discord.MessageEmbed()
    .setColor("#0f4bff")
    .setDescription(`<a:Asukie_Certo:766437760381878282> **|** Você retirou ${args[0]} do banco.`);

    message.channel.send(embed5)
    db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
    db.add(`money_${message.guild.id}_${user.id}`, args[0])
        }
    }
}