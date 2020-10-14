const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('<a:errado:753245066965024871> **|** Cite o nick de alguma conta criada do Minecraft, e consiga a cabeça.')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Nickname: ${args[0]}`)
        .setDescription(`<:ModulE:762729478757023834> **[Clique Aqui](https://mc-heads.net/head/${args[0]})**`)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setColor('#8500de')
        
    message.channel.send(embed)
}

exports.help = {
    name: 'mchead',
    aliases: ['head']
}