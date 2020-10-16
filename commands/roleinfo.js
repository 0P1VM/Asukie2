const Discord = require("discord.js");
const db = require('quick.db')
const b = require('../renegados/renegados.js')

exports.run = async(client, message, args) => {
  
  if (message.deletable) message.delete()

var blacklist = ['752954404986159275']

let renegado = new Discord.MessageEmbed()
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

    let mnt = new Discord.MessageEmbed()

.setDescription(`**Olá, ${message.author}**\n` +
                `\nNo momento fui enviada para outra galáxia\n` + 
				`Em breve voltarei a responder por seus comandos.`)
.setThumbnail('https://i.pinimg.com/originals/91/de/b5/91deb532d34761aaf73e43c758dc5446.png')
.setColor(`#0f4bff`)
      
     return message.channel.send(mnt)
      
    } 
  
  if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
    return message.channel.send(
      "<a:errado:753245066965024871> **|** Para executar esse comando você necessita da permissão de **MANAGE_ROLES** ou até mesmo **ADMINISTRADOR**."
    );
  let role =
    message.guild.roles.cache.find(r => r.name == args[0]) ||
    message.guild.roles.cache.find(r => r.id == args[0]) ||
    message.mentions.roles.first() ||
    args.join(" ");
  if (!role) return message.reply("<a:errado:753245066965024871> **|** Mecione um cargo ou cole o ID do cargo.");
  let embed = new Discord.MessageEmbed()
    .setColor(`${role.hexColor}`)
    .addField("ID", `${role.id}`, true)
    .addField("Nome", "`" + `${role.name}` + "`", true)
    .addField("Menção", `\`<@&${role.id}>\``, true)
    .addField("Cor", `\`${role.hexColor}\``, true)
    .addField(`Membros`, `${role.members.size}`, true)
    .addField(`Posição`, `${role.position}`, true)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(embed);
};