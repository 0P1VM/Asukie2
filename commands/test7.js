const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')
const c = require('../config.json')

module.exports = {
    name: 'work',
	description: 'Trabalhe!',
    aliases: ['trabalhar'],
    usage: '$trabalhar',
    cooldown: 45,
	run: async (client, message, args) => {
    
  let erro = new Discord.MessageEmbed()
  .setTitle(`INFORMAÇÃO`)
  .setDescription(`**`)
  .addField(`:hammer: | **Uso**`, `\`${c.prefix}trabalhar <trabalho>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${c.prefix}trabalhar <programador>\``, true)
  .addField(`:briefcase: | Trabalhos`, `\`Programador, Pedreiro, \``)
  .addField(`:twisted_rightwards_arrows: | Alternativas`, `\`Nenhuma\``)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .setColor('#0f4bff')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    
    var test7 = args.slice(0).join(" ");
    if (!test7) return message.channel.send(erro)
    

        const random = Math.floor(Math.random() * 500)
        const chance = Math.floor(Math.random() * 100)
    
        let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(args[0] == 'pedreiro') {
    

            let replylost = [`O cliente não ficou satisfeito com o seu serviço, e o seu patrão descontou ¥ ${random} do seu salário.`, `Você acaba de perder ¥ ${random} pois estava chegando muito tarde no serviço.`, `Você ficou conversando e atrapalhou outros funcionarios... e o patrão retirou ¥ ${random} do seu salário.`]
            let replyl = replylost[Math.floor(Math.random() * replylost.length)]
        
            let replywin = [`Você concluio mais uma casa e recebeu ¥ ${random}.`, `O patrão viu o seu esforço e te deu um aumento de ¥ ${random} parabéns!!.`, `Foi um trabalho comum, você ganhou ¥ ${random}.`]
            let replyw = replywin[Math.floor(Math.random() * replywin.length)]
    
        const embed = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769190026164568094/AsukiePedreiro.png')
        .setTitle("Parabéns!")
        .setColor("#0f4bff")
        .setDescription(replyw)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    
        const lost = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769190026164568094/AsukiePedreiro.png')
        .setTitle("Triste!")
        .setColor("#0f4bff")
        .setDescription(replyl)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    
        if(chance < 50) {
            db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
            message.channel.send(lost)
        }
        if(chance > 50) {
            db.add(`money_${message.guild.id}_${message.author.id}`, random)
            message.channel.send(embed)
        }
    
    }
    
    
    if(args[0] == 'Pedreiro') {
    

            let replylost = [`O cliente não ficou satisfeito com o seu serviço, e o seu patrão descontou ¥ ${random} do seu salário.`, `Você acaba de perder ¥ ${random} pois estava chegando muito tarde no serviço.`, `Você ficou conversando e atrapalhou outros funcionarios... e o patrão retirou ¥ ${random} do seu salário.`]
            let replyl = replylost[Math.floor(Math.random() * replylost.length)]
        
            let replywin = [`Você concluio mais uma casa e recebeu ¥ ${random}.`, `O patrão viu o seu esforço e te deu um aumento de ¥ ${random} parabéns!!.`, `Foi um trabalho comum, você ganhou ¥ ${random}.`]
            let replyw = replywin[Math.floor(Math.random() * replywin.length)]
    
        const embed = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769190026164568094/AsukiePedreiro.png')
        .setTitle("Parabéns!")
        .setColor("#0f4bff")
        .setDescription(replyw)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    
        const lost = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769190026164568094/AsukiePedreiro.png')
        .setTitle("Triste!")
        .setColor("#0f4bff")
        .setDescription(replyl)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    
        if(chance < 50) {
            db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
            message.channel.send(lost)
        }
        if(chance > 50) {
            db.add(`money_${message.guild.id}_${message.author.id}`, random)
            message.channel.send(embed)
        }
    
    }
    

        if(args[0] == 'programador') {
            const replywin = [`Sua equipe programou um sistema operacional e ele explodiu no mundo inteiro! Você ganhou ¥ ${random}.`, `Você concertou muitos erros de código do Facebook e ganhou ¥ ${random}!`, `Você recebeu ¥ ${random} por ter trabalhado na Apple!`]
            const replyw = replywin[Math.floor(Math.random() * replywin.length)]
        
            const replylost = [`Você fez um pequeno erro que fez sua empresa perder milhões, junto com os milhões você perdeu ¥ ${random}.`, `Você acabou dormindo no trabalho e perdeu ¥ ${random}.`, `Já pensou em quitar do ramo? Você perdeu ¥ ${random} por ter erro nos seus codes.`]
            const replyl = replylost[Math.floor(Math.random() * replylost.length)]

            const embed = new Discord.MessageEmbed()
           .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769179612617637948/645912.png')
            .setTitle("Parabéns!")
            .setColor("#0f4bff")
            .setDescription(replyw)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

        
            const lost = new Discord.MessageEmbed()
            .setTitle("Triste!")
            .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769179612617637948/645912.png')
            .setColor("#0f4bff")
            .setDescription(replyl)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

        
            if(chance < 50) {
                db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
                message.channel.send(lost)
            }
            if(chance > 50) {
                db.add(`money_${message.guild.id}_${message.author.id}`, random)
                message.channel.send(embed)
            }
        }
    
    
    if(args[0] == 'Programador') {
            const replywin = [`Sua equipe programou um sistema operacional e ele explodiu no mundo inteiro! Você ganhou ¥ ${random}.`, `Você concertou muitos erros de código do Facebook e ganhou ¥ ${random}!`, `Você recebeu ¥ ${random} por ter trabalhado na Apple!`]
            const replyw = replywin[Math.floor(Math.random() * replywin.length)]
        
            const replylost = [`Você fez um pequeno erro que fez sua empresa perder milhões, junto com os milhões você perdeu ¥ ${random}.`, `Você acabou dormindo no trabalho e perdeu ¥ ${random}.`, `Já pensou em quitar do ramo? Você perdeu ¥ ${random} por ter erro nos seus codes.`]
            const replyl = replylost[Math.floor(Math.random() * replylost.length)]

            const embed = new Discord.MessageEmbed()
           .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769179612617637948/645912.png')
            .setTitle("Parabéns!")
            .setColor("#0f4bff")
            .setDescription(replyw)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

        
            const lost = new Discord.MessageEmbed()
            .setTitle("Triste!")
            .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/769179612617637948/645912.png')
            .setColor("#0f4bff")
            .setDescription(replyl)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

        
            if(chance < 50) {
                db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
                message.channel.send(lost)
            }
            if(chance > 50) {
                db.add(`money_${message.guild.id}_${message.author.id}`, random)
                message.channel.send(embed)
            }
        }
    
        

    }
}