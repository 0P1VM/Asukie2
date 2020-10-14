const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
 if(message.deletable) message.delete();
let status = db.get(`status_${message.guild.id}`)
  if(status === null) status = (`**<:desativo:761041461676081173> Desativado**`)

let status2 = db.get(`status2_${message.guild.id}`)
  if(status2 === null) status2 = (`**<:desativo:761041461676081173> Desativado**`)

    let tempoo= await db.get(`tempoo_${message.guild.id}`)
    if(tempoo === null) tempoo = (`20`)

    let defc= await db.get(`defc_${message.guild.id}`)

    if(defc === null) defc = (`Atualmente Nenhum.`)
    let a1 = new Discord.MessageEmbed()
    .setColor('#8500de')
    .setDescription('<a:errado:753245066965024871> **|** Você precisa ter a permissão de gerenciar servidor para fazer isso.')

    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(a1)

    let embedConfig = new Discord.MessageEmbed()
    .setColor('#8500de')
    .setTitle('**Sistemas de log(Entrada/Saída) - Asukie™**')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`Olá, ${message.author}!\n` +
`**Servidor:** ${message.guild.name}\n` +
`\n> <a:um_:753380031031672873> | Configurações de Entrada\n` +
`> <a:dois_:753380069971591178> | Configurações de Saída\n` +
`\n**Informações:**\n` +
`As configurações de entrada, são as mensagens de bem-vindo quando alguem entrar em seu servidor.\n` +
`As configurações de saída, por sua vez, são as mensagens enviadas quando um usuário sair do seu servidor.\n` +
`As configurações de entrada no privado, são as mensagem enviadas no privado dos membros que entrarem em seu servidor.`)
    .setFooter(`Sistema de Entrada/Saída - Asukie™`, client.user.displayAvatarURL({dynamic: true}))

    message.channel.send(embedConfig).then(msg => {
      msg.react('753380031031672873').then(() => msg.react('753380069971591178'))

        let filtroMsg = (reaction, usuario) => reaction.emoji.id === '753380031031672873' && usuario.id == message.author.id;
        let coletorMsg = msg.createReactionCollector(filtroMsg, {max: 1})


        let embedT = new Discord.MessageEmbed()
        .setColor("#8500de") 
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**<:textchat:761818574859010109> **|** Digite o tempo em que a mensagem será deletada automaticamente.**\n` +
`> **Exemplo:** \`30 segundos\` ou \`2 minutos\``)
        let embedL = new Discord.MessageEmbed()
        .setColor("#8500de") 
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**<:textchat:761818574859010109> **|** Digite uma nova mensagem de entrada.\n` +
                       `Variáveis:** \`{usuario}\` e \`{servidor}\``)
        let entrada = new Discord.MessageEmbed()
        .setTitle(`Configurações de Entrada - Asukie™`)
        .setColor("#8500de")
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**Servidor:** ${message.guild.name}\n` +
        `\n**Configurações disponiveis:**\n` +
        `<a:um_:753380031031672873> **|** Mensagem de bem-vindo\n` +
        `<a:dois_:753380069971591178> **|** Tempo para deletar a mensagem\n` +
        `\n• Canal definido: ${defc}\n` +
        `<a:tres_:753380098966814811> **|** Canal que a mensagem será enviada\n` +
        `\n**• Deletar Mensagens automaticamente:**\n` +
        `> Tempo Definido: \`${tempoo} Segundos\`\n` +
        `<a:quatro_:753380130503655562> **|** Atualmente: (${status})\n` +
        `\n**• Ativar mensagens de boas vindas:**\n` +
        `<a:cinco_:753380150590046309> **|** Atualmente: (${status2})\n` +
        `\n<a:seis_:753385356216238201> **|** Acesse as configurações de mensagem privada\n` +
        `\n**Informações:**\n` +
        `Todas as opções são sobre as configurações da mensagem de bem-vindo\n` +
        `Basta reagir com o número de uma opção para acessar sua configuração.\n` +
        `\nReaja com (<:seta2:762496132092788767>) para voltar ao menu anterior.`)

        coletorMsg.on('collect', cp => {
          msg.delete()
          msg.channel.send(entrada).then(msge => {
          msge.react('762496132092788767').then(() => msge.react('753380031031672873')).then(() => msge.react('753380069971591178')).then(() => msge.react('753380098966814811')).then(() => msge.react('753380130503655562')).then(() => msge.react('753380150590046309')).then(() => msge.react('753385356216238201'))

        let msgbv = (reaction, usuario) => reaction.emoji.id === '753380031031672873' && usuario.id == message.author.id;
        let coletorMsg2 = msge.createReactionCollector(msgbv, {max: 1})
        
        coletorMsg2.on('collect', cp => { 
       message.channel.send(embedL)
})
let msgdel = (reaction, usuario) => reaction.emoji.id === '753380069971591178' && usuario.id == message.author.id;
        let coletorMsg3 = msge.createReactionCollector(msgdel, {max: 1})
        coletorMsg3.on('collect', cp => {
cp.author.remove();
        message.channel.send(embedT)
})
               })
          })
   })
}

exports.help = {
  name: 'welcome',
  aliases: ['configwelcome', 'welcome-config', 'welcomeconfig']
}