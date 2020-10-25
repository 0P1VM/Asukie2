const Discord = require('discord.js');
const c = require('../config.json')

exports.run = async (client, message, args) => {
message.delete();

//tem que arrumar ainda
    if(!message.member.hasPermission("BAN_MEMBERS", false, true, true)) {
        return message.reply("Desculpe, você não tem permissão de desbanir usuários neste servidor! <:noswift:529635602292015134>").catch(()=>{});
    }
    if (!message.guild.me.hasPermission("BAN_MEMBERS", false, true)) {
        return message.reply("Eu não tenho permissão para desbanir usuários nesse servidor. <:noswift:529635602292015134>").catch(()=>{});
    }
    let bannedUsers = await message.guild.fetchBans().catch(()=>{});
    let size = bannedUsers.size;
let inicio = new Discord.MessageEmbed()
.setDescription(`Começando | 0/${size}`)
let pronto = new Discord.MessageEmbed()
.setDescription(`Pronto!`)


    message.channel.send(inicio).then(async m => {
let desbanindo = new Discord.MessageEmbed()
.setDescription(`${i}/${size}`)
            let i = 0;
            for (var user of bannedUsers.values()) {
                 await m.guild.unban(user)
                    .then(() => {
                        ++i;
                        if (i % 10 === 0) {
                            m.edit(desbanindo).catch(()=>{});
                        }
                    })
                    .catch(()=>{});
            }
            m.edit(pronto).catch(()=>{});
        })
        .catch(()=>{});
};
