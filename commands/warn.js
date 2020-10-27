const Discord = require("discord.js")
const db = require("quick.db")
const c = require('../config.json')

module.exports = {
    name: "warn",
    aliases: [],
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("<:Asukie_atencao:766406396337193020> **|** Você não tem a permissão de **ADMINISTRADOR**!")
          }
          const user = message.mentions.members.first()
          if(!user) {
            return message.channel.send("<:Asukie_atencao:766406396337193020> **|** Mecione a pessoa que vai receber o aviso!")
          }
          if(message.mentions.users.first().bot) {
            return message.channel.send("<:Asukie_atencao:766406396337193020> **|** Parece que ocorreu algum erro, você está tentando enviar um aviso pra algum bot!")
          }
          if(message.author.id === user.id) {
            return message.channel.send("<:Asukie_atencao:766406396337193020> **|** Não pode enviar avisos pra você mesmo!")
          }
          if(user.id === message.guild.owner.id) {
            return message.channel.send("<:Asukie_atencao:766406396337193020> **|** Você não pode enviar um aviso pra conta posse do servidor!")
          }
          const reason = args.slice(1).join(" ")
          if(!reason) {
            return message.channel.send(`<:Asukie_atencao:766406396337193020> **|** Especifique a razão do aviso! [**ex:** \`${c.prefix}warn <@719944880800923690> Fofinho demais\`]`)
          }
          let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
          if(warnings === 3) {
            return message.channel.send(`${message.mentions.users.first().username} já chegou ao seu limite de 3 avisos!`)
          }
          if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`**Foste avisado no server: ${message.guild.name}**\n**Razão: ${reason}**`)
            const suc = new Discord.MessageEmbed()
              .setDescription(`<a:certo:753245146249822381> **| Usuário avisado com sucesso!**`)
              .setColor("#")
            await message.channel.send(suc)
          } else if(warnings !== null) {
              db.add(`warnings_${message.guild.id}_${user.id}`, 1)
             user.send(`**Foste avisado no server: ${message.guild.name}**\n**Razão: ${reason}**`)
            const suc = new Discord.MessageEmbed()
              .setDescription(`<a:certo:753245146249822381> **| Usuário avisado com sucesso!**`)
              .setColor("#")
            await message.channel.send(suc)
        }
    }
    }