const Discord = require('discord.js')
const c = require('../config.json')

exports.run = async (client, message, args) => {
message.delete();
    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(`${message.author}, digite uma sugestão. :mailbox_with_no_mail:`)
        return undefined;
    }

    const embed = new Discord.MessageEmbed()
        .setAuthor(`Sugestão de ${message.author.tag}`)
        .setDescription(`\`\`\`${mensg}\`\`\``)
        .setColor('#0f4bff')
        .setThumbnail(message.author.AvatarURL)
    client.channels.cache.get(`769695709250191390`).send(embed)
        .then(function (msg) {
            msg.react("✅");
            msg.react("❌"); 
            message.channel.send(`**Sua sugestão foi enviada! :mailbox_with_no_mail:**`).then(m => {
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