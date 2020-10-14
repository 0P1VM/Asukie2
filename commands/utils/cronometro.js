const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Vou conometrar um tempo para você*`)
  .addField(`:hammer: | **Uso**`, `\`${client.config.prefix}cronometro <tempo>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${client.config.prefix}cronometro 10s\``, true)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: | **Alternativas**`, `\`${client.config.prefix}lembrete, ${client.config.prefix}lembrar\``)
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setColor('#8500de')  

  let Timer = args[0];

  if (!args[0]){
    return message.channel.send(erro);
  }

  if (args[0] <= 0){
    return message.channel.send(erro);
  }

  message.channel.send(":alarm_clock: **|** Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\``)

  setTimeout(function(){
    message.channel.send(`<a:atencao:754000212128956546> | BIP BIP BIP! acabou o tempo ${message.author}`)

  }, ms(Timer));
}

exports.help = {
    name: 'lembrar',
    aliases: ['lembrete', 'cronometro', 'cronômetro']
}