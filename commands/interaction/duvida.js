const Discord = require("discord.js");


exports.run = (client, message, args) => {
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')

  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Pergunte para mim, a mais sábia!*`)
  .addField(`:hammer: | **Uso**`, `\`${client.config.prefix}duvida <dúvida>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${client.config.prefix}duvida Sou fofinha? :3\``, true)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .setColor('#8500de')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    var replies = [ "Sim", "Não", "Talvez", "Quem sabe...", "Claro", "Se pá", "Jamais", "", "" ];
    var result = Math.floor((Math.random() * replies.length));
    
    var duvida = args.slice(0).join(" ");
    if (!duvida) return message.channel.send(erro)
  
    let embed = new Discord.MessageEmbed()
    
    .addField(`**Dúvida**`, `${duvida}`)
    .addField(`Resposta`, `${replies [result]}`)
    .setColor('#8500de')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setThumbnail('https://cdn.discordapp.com/attachments/760597034138075158/763504895436783616/duvida-frequente.png')
    
    message.channel.send(embed)
}

exports.help = {
    name: 'duvida',
    aliases: ['pergunta', 'dúvida']
}