const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db")
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  run: async (client, message, args) => {
    
    var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let mnt = new Discord.MessageEmbed()

.setDescription(`**Olá, ${message.author}**\n` +
                `\nNo momento fui enviada para outra galáxia\n` + 
				`Em breve voltarei a responder por seus comandos.`)
.setThumbnail('https://i.pinimg.com/originals/91/de/b5/91deb532d34761aaf73e43c758dc5446.png')
.setColor(`#0f4bff`)
      
     return message.channel.send(mnt)
      
    } 
    
    if (!args[0]) return message.channel.send(`<a:errado:753245066965024871> **|** Você precisa especificar um tempo!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `<a:errado:753245066965024871> **|** O formato do time está errado. **ex:** \`d: dia's\`h: hora's\`m: mês\` \`s: Segundo's\``
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `<a:errado:753245066965024871> **|** I could not find that channel in the guild!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`*Giveaway created in ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `<:tempo_Asukie:761377182286217216> The user ${message.author} is hosting a giveaway for the prize of **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `<a:Party:743831237684363324>Not enough people reacted for me to start draw a winner!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `<a:Asukie_Giveaway:766632825642287104> **|** O vencedor do sorteio foi... ${winner} parabéns acabou de ganhar **${prize}**.`
      );
    }, ms(args[0]));
  },
};