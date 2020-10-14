const Discord = require("discord.js");

exports.run = (client, message, args) => {

    const random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){

        message.channel.send(`Rodou o cartucho e você... **SOBREVIVEU**! <a:AsukieFeliz:762823753456549894>`)

    }
    else{

        message.channel.send(`Rodou o cartucho e você... **MORREU**! <:AsukieCry:762822300563144705>`)
      }
}

exports.help = {
    name: 'roletarussa',
    aliases: []
}