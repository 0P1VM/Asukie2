const Discord = require('discord.js')
const db = require('quick.db')
const b = require('../renegados/renegados.js')

module.exports = {
    name: 'covidsin',
	description: 'Sintomas do COVID-19',
    aliases: ['covidsintoma', 'c19sin'],
    usage: '$covidsin',
    cooldown: 5,
	run: async (client, message, args) => {
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
    
    let covidsin = new Discord.MessageEmbed()
    .setTitle("Sintomas COVID-19")
    .addField("Sintomas mais comuns", " Febre\n Tosse\n  Cansaço")
    .addField("Sintomas menos comuns", " Dores e desconfortos\n  Dor de garganta\n  Diarreia\n  Conjutivite\n  Dor de cabeça\n  Perda de paladar\n  Erupção cutânea na pele ou descoloração dos dedos das mãos ou dos pés")
    .addField("Sintomas graves", " Dificuldade de respirar ou falta de ar\n  Dor ou pressão no peito\n  Perda de fala ou movimento")
    .setColor('#0f4bff')
    .setThumbnail('https://images.vexels.com/media/users/3/193239/isolated/preview/e83db85552ee35f6276411c9f19d982d-covid-19-boy-character-icon-by-vexels.png')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(covidsin)

    }
}