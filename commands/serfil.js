const discord = require("discord.js");
const imdb = require("imdb-api");
const b = require('../renegados/renegados.js')

module.exports = {
  name: "serfil",
  run: async (client, message, args) => {
    message.delete();

    if(!args.length) {
      return message.channel.send("<a:errado:753245066965024871> **|** Escreva o nome de alguma \`Série/Filme\` após o comando.")
    }
    
    const imob = new imdb.Client({apiKey: "5e36f0db"}) //You need to paste you imdb api
    
    let movie = await imob.get({'name': args.join(" ")})
    
    let embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("#0f4bff")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .addField("Avaliação", movie.rating, true)
    .addField("País", movie.country, true)
    .addField("Linguagem", movie.languages, true)
    .addField("Tipo", movie.type, true)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    
    
    message.channel.send(embed)
    
    
    
  }

}