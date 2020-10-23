const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'bal',
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


        let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

        let cash = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let bank = db.fetch(`bank_${message.guild.id}_${message.author.id}`)

        
        
        const embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/767946817387102249/Poupansa_Asukie.png")
        .addField("Dinheiro no Bolso", cash)
        .addField("Dinheiro no Banco", bank)
        .setColor("#0f4bff")
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

        if(!user) {
            let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)
            message.channel.send(embed)
        } else {
            let cash = db.fetch(`money_${message.guild.id}_${user.id}`)      
            let bank = db.fetch(`bank_${message.guild.id}_${user.id}`) 
            const embed2 = new Discord.MessageEmbed()
            .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/767946817387102249/Poupansa_Asukie.png")
            .addField("Dinheiro no Bolso", cash)
            .addField("Dinheiro no Banco", bank)
            .setColor("#0f4bff")
            .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
            message.channel.send(embed2)
        } 
    }
}