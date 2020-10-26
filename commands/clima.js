var weather = require('weather-js');
const c = require('../config.json');
const Discord = require('discord.js')
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

    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Veja o clima em alguma cidade*`)
  .addField(`:hammer: | **Uso**`, `\`${c.prefix}clima <cidade>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${c.prefix}clima Rio de Janeiro\``, true)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: | **Alternativas**`, `\`${c.prefix}tempo\``)
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
  .setColor('#0f4bff')   

    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        if (!result) return message.channel.send(erro)
        if (!result[0]) return message.channel.send(`<a:errado:753245066965024871> **|** Desculpe ${message.author}, não encontrei essa cidade.`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**${result[0].location.name}**`)
            .addField(`Temperatura`, `\`${result[0].current.temperature}°C\``)
            .addField(`Sensação Térmica`, `\`${result[0].current.feelslike}°C\``)           
            .addField(`Fuso Horário`, `\`UTC${result[0].location.timezone}\``)
            .addField(`Umidade`, `\`${result[0].current.humidity}%\``)          
            .addField(`Vento`, `\`${result[0].current.windspeed}\``)
            .addField(`Céu`, `\`${result[0].current.skytext}\``)
            .addField(`Dia`, `\`${result[0].current.day}\``)
            .addField(`Data`, `\`${result[0].current.date}\``)                        
            .setColor("#0f4bff")
            .setThumbnail(result[0].current.imageUrl)
            .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

        message.channel.send(embed)

    });
};

exports.help = {
    name: `clima`,
    aliases: ['tempo']
};