const Discord = require('discord.js'); 
const time = ""

exports.run = async (client, message, args) => { 
message.delete();

  var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!membro) return message.channel.send(`<a:errado:753245066965024871> **|** Mencione um usuário e um motivo válido!`);
  if (membro === message.member) return message.channel.send(`<a:errado:753245066965024871> **|** Você não pode hackear você mesmo!`);
  if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send(`<a:errado:753245066965024871> **|** Eu não tenho a permissão de **EMBED_LINKS**!`);

    var exemplos = ["Quem é aquele admin gostoso? Arruma o zap dele pra mim ai", "Não vai dar... Precisamos terminar...", "Vamo GF? rs", "Queria uma lolizinha :(", "Vai com calma que é minha primeira vez tá?", "Traveco é mó gostoso", "Tudo bem, mas agora eu sou lesbica", "Você tá muito linda hoje", "Vontade de uébi namorar com você", "O cara me gravou gemendo, que doente!", "Te amo...", "Quero que minha ex vá toma %$#%#@"]; 
	var conexao = ["São Paulo", "Bahia", "Amazonas", "Rio de Janeiro", "Russia", "Lisboa", "Brasília", "Salvador", "Pará", "Pernambuco", "Minas Gerais", "Rio Grande do Sul", "Paraíba"]; 
    var resultado = Math.floor((Math.random() * exemplos.length)); 
	var resultado1 = Math.floor((Math.random() * conexao.length)); 
  
    let espere = new Discord.MessageEmbed()
    .setDescription(`<a:hackerman:761838986976034827> Entrando em conexão com o servidor... \`(1/2)\``)	
	.setImage(`https://www.imperva.com/blog/wp-content/uploads/sites/9/2016/12/ddos-spoffed-ips.gif`)
   .setColor('#8500de')
	
	let espere1 = new Discord.MessageEmbed()
    .setDescription(`<a:hackerman:761838986976034827> Invadindo o sistema... \`(2/2)\``)	
	.setImage(`https://cdn.lowgif.com/small/1c35984a3b1d962a-hacking-gif-tumblr.gif`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Anonymous Hacking`, 'https://media.discordapp.net/attachments/670860111958376470/726250391380951040/9879_hackerman.gif')
    .setColor('#8500de')
    .addFields(
	{ name: `Última Mensagem:`, value: `\`${exemplos [resultado]}\``, inline: true },
	{ name: `Última Conexão com o Discord:`, value: `\`${conexao [resultado1]}\``, inline: true},
	{ name: `Usuário:`, value: `\`${membro.user.username}\``},
	{ name: `ID:`, value: `\`${membro.id}\``, inline: true},
	)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setThumbnail('https://i.gifer.com/DiXw.gif')   
message.channel.send(espere)
  .then((msg) => {
    setTimeout(function() {
    msg.edit(espere1);
msg.delete({ timeout: 1000 })
msg.channel.send(embed)
  }, 1000)})
}

exports.help = { 
    name: 'hackerman',
    aliases: ['hackeando', 'hackeador']
}