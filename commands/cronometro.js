const Discord = require('discord.js');
const c = require('../config.json');
const ms = require('ms');
const db = require('quick.db')
const b = require('../renegados/renegados.js')

exports.run = async (client, message, args) => {
message.delete();

var blacklist = ['752954404986159275']

let renegado = new Discord.MessageEmbed()
.setDescription(`<:Asukie_atencao:766406396337193020> **|** Desculpe, ${message.author} atualmente você foi inserido em minha \`blacklist\`\n` + 
`Você não poderá utilizar nenhum comando enquando estiver nela!`)
.setColor(`#0f4bff`)

  if (!['752954404986159275'].includes(message.author.id)) {
    message.delete();
message.channel.send(renegado).then(m => {
        m.delete({ timeout: 9000 });
      });
    } 

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
  .setDescription(`*Vou conometrar um tempo para você*`)
  .addField(`:hammer: | **Uso**`, `\`${c.prefix}cronometro <tempo>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${c.prefix}cronometro 10s\``, true)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: | **Alternativas**`, `\`${c.prefix}lembrete, ${c.prefix}lembrar\``)
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setColor('#0f4bff')  

  let Timer = args[0];

  if (!args[0]){
    return message.channel.send(erro);
  }

  if (args[0] <= 0){
    return message.channel.send(erro);
  }

  message.channel.send(":alarm_clock: **|** Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\``)

  setTimeout(function(){
    message.channel.send(`<a:aviso:758897403277082654> **|** BIP BIP BIP! acabou o tempo ${message.author}`)

  }, ms(Timer));
}

exports.help = {
    name: 'lembrar',
    aliases: ['lembrete', 'cronometro', 'cronômetro']
}