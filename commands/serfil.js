const discord = require("discord.js");
const imdb = require("imdb-api");
const b = require('../renegados/renegados.js')

module.exports = {
  name: "serfil",
  run: async (client, message, args) => {
    message.delete();

var blacklist = ['752954404986159275']

let renegado = new discord.MessageEmbed()
.setDescription(`<:Asukie_atencao:766406396337193020> **|** Desculpe, ${message.author} atualmente você foi inserido em minha \`blacklist\`\n` + 
`Você não poderá utilizar nenhum comando enquando estiver nela!`)
.setColor(`#0f4bff`)

  if (!['752954404986159275'].includes(message.author.id)) {
    message.delete();
message.channel.send(renegado).then(m => {
        m.delete({ timeout: 9000 });
      });
    } 


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