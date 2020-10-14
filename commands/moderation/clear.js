const Discord = require('discord.js')


exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Você precisa da permissão de **GERENCIAR MENSAGENS** para executar este comando`); 
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Eu não tenho permissão para apagar mensagens nesse servidor.`); 
    let clean = args.join(''); 

    if(isNaN(clean)) return message.channel.send(`Digite um número de mensagens para apagar`)
 if (!message.author) return message.channel.send(`<a:errorx:753355949279936553> | ${message.author} utilize o comando.\n` +
  `> **Exemplo**: ${client.config.prefix}clear <numero>`)
    if (clean < 1 || clean > 200) return message.channel.send(`<a:errorx:753355949279936553> | ${message.author} utilize o comando.\n` +
  `> **Exemplo**: ${client.config.prefix}clear <numero>`)

    try { 
        message.channel.bulkDelete(clean)
        
        let embed = new Discord.MessageEmbed()

        .setDescription(`:zap: **Foram deletadas ${clean} mensagens.**`)
        .setColor("#8500de")


        message.channel.send(embed).then(msg => {
         if (msg.deletable) msg.delete({timeout: 8000})
        })
    } catch(e){ 
        console.log(e); 
    }
}