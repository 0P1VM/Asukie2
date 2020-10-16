const Discord = require('discord.js');
const db = require('quick.db')
const c = require('../config.json')

module.exports = {
	name: 'supreme',
	aliases: [],
	run: async (client, message, args) => {
    
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
    
		if (!args[0]) {
			return message.channel.send(
				`<a:errado:753245066965024871> **|** Você precisa escrever algo após o comando **ex:** \`${c.prefix}supreme <mensagem>\`.`,
			);
		}

		const image = `https://api.alexflipnote.dev/supreme?text=${args.join('%20')}`;
		const attachment = new Discord.MessageAttachment(image, 'supreme.png');
		message.channel.send(attachment);
	},
};