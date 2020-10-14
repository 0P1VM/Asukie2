var weather = require('weather-js');
const Discord = require('discord.js')

exports.run = (client, message, args) => {


    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Veja o clima em alguma cidade*`)
  .addField(`:hammer: | **Uso**`, `\`${client.config.prefix}clima <cidade>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${client.config.prefix}clima Rio de Janeiro\``, true)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: | **Alternativas**`, `\`${c.prefix}tempo\``)
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
  .setColor('#8500de')   

    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        if (!result) return message.channel.send(erro)
        if (!result[0]) return message.channel.send(`<a:errado:753245066965024871> **|** Desculpe **${message.author.username}**, não encontrei essa cidade!`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**${result[0].location.name}**`)
            .addField(`Temperatura`, `\`${result[0].current.temperature}°C\``, true)
            .addField(`Sensação Térmica`, `\`${result[0].current.feelslike}°C\``, true)
            .addField(`Umidade`, `\`${result[0].current.humidity}%\``)
            .addField(`Vento`, `\`${result[0].current.windspeed}\``)
            .setColor("#8500de")
            .setThumbnail('http://www.pngmart.com/files/3/Weather-PNG-HD.png')
            .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

        message.channel.send(embed)

    });
};

exports.help = {
    name: `clima`,
    aliases: ['tempo']
};
