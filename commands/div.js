const Discord = require("discord.js");
const c = require('../config.json');
const db = require('quick.db')
const cor = require('../utils/cor.json')
exports.run = async (client, message, args) => {
message.delete().catch(()=>{});

    var user = message.author;
    var userId = message.author.id;
    var userInvites = message.guild.fetchInvites().then(invites => invites.find(invite => invite.inviter.id === userId));
    var targetInvites = await message.guild.fetchInvites().catch(()=>{});
    if (!targetInvites) return;
    var invitesUses = 0;
    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
        }
    });
   
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.displayAvatarURL({dynamic:true}))
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setDescription(`**<:add3Asukie:770087183755247646> Convidados: ${invitesUses}\n` +
   `<:add2Asukie:770087154260770826> Total no servidor: ${message.guild.members.cache.size}**`)
   .addField(`Lista de Convites`, `<:addAsukie:770087057108107276> ${targetInvites}`)
.setColor(cor.padrao)
   .setFooter(message.guild.name,  message.guild.iconURL({dynamic:true}))
  .setTimestamp()
    message.channel.send(embed).then(m => {
m.delete({timeout: 15000})
})
};