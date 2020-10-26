const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `<a:Bnao:746212123901820929> **|** Desculpe, ${message.author}. esse comando só pode ser utilizado em um servidor que você tenha permissão de banir usuários`
    ).then(m => {
m.delete({timeout: 10000})
})

let inicio = new Discord.MessageEmbed()
.setAuthor(`Interface de Configurações do Usuário - ${client.user.username}`)
.setDescription(`Olá, ${message.author}!\n` +
`Este é o seu painel de configurações exclusivo.\n` +
`Aqui você pode configurar seus gifs para minhas funções.\n` +
`Exemplo de link: https://discordapp.com/`)
.addFields(
{ name: `${client.user.username} | GIF de Banimento:`, value: ``}
)

}