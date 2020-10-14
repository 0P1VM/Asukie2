const snekfetch = require('snekfetch');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let [title, contents] = args.join(" ").split("|");
  if (!contents) [title, contents] = ["Conquista desbloqueada!", title];
  let rnd = Math.floor((Math.random() * 39) + 1);

  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if (!args.join(" ")) return message.reply("<a:errado:753245066965024871> **|** Por favor insira uma conquista. [**Ex:** ``a!conquista Coração da Asukie``]")
  if (title.length > 24 || contents.length > 22) return message.channel.send("<a:errado:753245066965024871> **|** Você inseriu mais de 22 caracteres.");
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url).then(r => message.channel.send({files:[{attachment: r.body}]}));
};

exports.help = {
  name: 'achievement',
  aliases: ['conquista']
};