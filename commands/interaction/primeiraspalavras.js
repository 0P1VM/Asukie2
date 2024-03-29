const Discord = require('discord.js')
var Jimp = require("jimp")

exports.run = async (client, message, args) => {

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send('<a:errado:753245066965024871> **|** Você não escreveu nada.')
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send('<a:errado:753245066965024871> **|** Você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?')
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('<a:loading:753391174202425364> **|** Processando...').then(message => {
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.send('<a:errado:753245066965024871> **|** Ocorreu um erro ao criar a imagem.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send('<a:errado:753245066965024871> **|** Preciso da permissão **ATTACH_FILES** pra executar esse comando.')
            }
        }
    }
}

exports.help = {
    name: "primeiraspalavras",
    aliases: ['']
}