const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
const db = require('quick.db')
const b = require('../renegados/renegados.js')

module.exports = {
  name: "punch",
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

   var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let mnt = new discord.MessageEmbed()

.setDescription(`**Olá, ${message.author}**\n` +
                `\nNo momento fui enviada para outra galáxia\n` + 
				`Em breve voltarei a responder por seus comandos.`)
.setThumbnail('https://i.pinimg.com/originals/91/de/b5/91deb532d34761aaf73e43c758dc5446.png')
.setColor(`#0f4bff`)
      
     return message.channel.send(mnt)
      
    } 

    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    let data = await random.getAnimeImgURL("punch");
    
const embe = new discord.MessageEmbed()
    .setImage(data)
    .setColor("#0f4bff")
    .setDescription(`${message.author} **deu um soco em** ${user} <:Soco:766473163445502002>`)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("#0f4bff")
    .setDescription(`${message.author} **deu um soco em** ${user} <a:Soco2:766473993103605800>`)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    
    await message.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === user.id;
      let coletor2 = msg.createReactionCollector(loop);

           coletor2.on("collect", cp => {
msg.channel.send(embe).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && user.id === message.author.id;
      let coletor3 = msg.createReactionCollector(loop);

           coletor3.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(loop);

           coletor4.on("collect", cp => {
msg.channel.send(embe).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(loop);

           coletor5.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor6 = msg.createReactionCollector(loop);

           coletor6.on("collect", cp => {
msg.channel.send(embe).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor7 = msg.createReactionCollector(loop);

           coletor7.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor8 = msg.createReactionCollector(loop);

           coletor8.on("collect", cp => {
msg.channel.send(embe).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor9 = msg.createReactionCollector(loop);

           coletor9.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor10 = msg.createReactionCollector(loop);

           coletor10.on("collect", cp => {
msg.channel.send(embe).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor11 = msg.createReactionCollector(loop);

           coletor11.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor12 = msg.createReactionCollector(loop);

           coletor12.on("collect", cp => {
msg.channel.send(embe).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor13 = msg.createReactionCollector(loop);

           coletor13.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor14 = msg.createReactionCollector(loop);

           coletor14.on("collect", cp => {
msg.channel.send(`${message.author} **| Esse é o meu limite!**`)
           })
           })
           })
           })
           })
           })           
           })
           })
           })
           })
           })           
           })
           })           
           })
           })
           })
           })
           })           
           })
           })
           })
           })
           })
           })
           })
           })
  }
}