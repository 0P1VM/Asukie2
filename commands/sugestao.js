const Discord = require('discord.js')
const c = require('../config.json')

exports.run = async (client, message, args) => {
message.delete();
    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send('<a:Asukie_Errado:767937012287537163> **|** Descreva a sugestão. [**Aviso:** \`Não abuse do comando ou será colocado na BlackList\`]')
        return undefined;
    }

    const embed = new Discord.MessageEmbed()
        .setAuthor(`Asukie | Sugestão`)
       .setColor("#0f4bff")
        .addField("Usuário", `${message.author}`)
       .addField("Bug", `${mensg}`)
       .addField("Usuário ID", `\`${message.author.id}\``)
       .addField("Servidor ID", `\`${message.guild.id}\``)
        .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/769770643130417163/AsukieSugestao.png")
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
    client.channels.cache.get(`769695949928792074`).send(embed)
        .then(function (msg) {
            msg.react("✅");
            msg.react("❌"); 
            message.channel.send(`<a:Asukie_Certo:766437760381878282> **|** Sua sugestão foi enviada!`).then(m => {
    m.delete({timeout : 7000})
    })
        }).catch(function (error) {
            console.log(error);
        });
}
exports.help = {
    name: 'sugestao',
    aliases: ['sugestão', 'sugerir', 'suggest']
}