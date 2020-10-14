const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = async (client, message, args) => {
  
message.delete();
 const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/kiss`);

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('<a:Bnao:746212123901820929> **|** Você está utilizando este comando de forma incorreta!\n' +
`> **Exemplo:** ${client.config.prefix}kiss <@!749044223692767302>`);
}

let avatar = message.author.displayAvatarURL({dynamic: true});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#8500de')
        .setDescription(`<a:Borbo:761702886996312064> ${message.author} ** acaba de beijar** ${user}`)
        .setImage(body.url)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  await message.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.id === "🔁" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(loop);

           coletor.on("collect", cp => {
             msg.channel.send(embed)
           })
  })
}