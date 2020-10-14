const Discord = require('discord.js')

module.exports = {
    name: 'covidsin',
	description: 'Sintomas do COVID-19',
    aliases: ['coronasintoma', 'c19sin'],
    usage: '$covidsin',
    cooldown: 5,
	async execute(client, args, message) {
    
    let covidsin = new Discord.MessageEmbed()
    .setColor("#8500de")
    .setTitle("Sintomas do COVID19")
    .addField("Sintomas mais comuns", "• Febre\n• Tosse\n • Cansaço")
    .addField("Sintomas menos comuns", "• Dores e desconfortos\n • Dor de garganta\n • Diarreia\n • Conjutivite\n • Dor de cabeça\n • Perda de paladar\n • Erupção cutânea na pele ou descoloração dos dedos das mãos ou dos pés")
    .addField("Sintomas graves", "• Dificuldade de respirar ou falta de ar\n • Dor ou pressão no peito\n • Perda de fala ou movimento")
    .setThumbnail("https://images.vexels.com/media/users/3/193283/isolated/lists/066f6d7104e6754cd424f80cfa61f959-covid-19-pulmones-sintomaticos.png")
    message.channel.send(covidsin)

    }
}