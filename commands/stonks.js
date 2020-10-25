const jimp = require("jimp")

exports.run = async (client, message, args) => {
message.delete();


        let img = jimp.read("https://media.discordapp.net/attachments/723135289320538152/733670552622989352/stonks-meme.png")
        if (!args[0]) return message.reply("Você precisa escrever algo pra fazer stonks.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                image.resize(685, 500)
                image.print(font, 70, 80, args.join(" "), 900)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "mime_dos_stonks.png"}]})
                })
            })
        })
    }
    exports.help = {
    name: 'stonks',
    aliases: [ ]
}