const Discord = require("discord.js");
const c = require("../config.json");
const db = require("quick.db");
const b = require('../renegados/renegados.js')

exports.run = async (client, message, args) => {
  message.delete();


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

  let perm = new Discord.MessageEmbed()
    .setDescription(
      `<a:errado:753245066965024871> **|** Você não tem permissão para banir este usuário.`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );

  let superior = new Discord.MessageEmbed()
    .setDescription(
      `<a:errado:753245066965024871> **|** Você não tem permissão para banir este usuário.`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );

if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `<a:Bnao:746212123901820929> **|** Desculpe, ${message.author}. É necessário ter a permissão de **BAN_MEMBERS** para executar este comando!`
    );
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `<a:Bnao:746212123901820929> **|** Oops! eu não tenho a permissão de **BAN_MEMBERS**, portanto não posso executar esta ação!`
    );
  if (!membro)
    return message.channel
      .send(
        `<a:Asukie_Errado:767937012287537163> **|** ${message.author} utilize o comando.\n` +
          `> **Exemplo:** ${c.prefix}ban <@usuario> motivo`
      )
      .then(m => {
        m.delete({ timeout: 9000 });
      });
  var motivo = args.slice(1).join(" ");
  if (!motivo) motivo = "<a:errado:753245066965024871> **|** Motivo não inserido";

let unkn = new Discord.MessageEmbed()
.setDescription(`<a:Asukie_Errado:767937012287537163> **| O usuário mencionado não foi encontrado.**`)
.setColor('#0f4bff')
.setFooter('Requisitado por:' + message.author.username, message.author.displayAvatarURL({dynamic: true}))
  var membro;
    if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0]) && args[0].length <= 22) {
            membro = message.mentions.members.first();
        }
    } else if (/[\d]{18}/.test(args[0]) && args[0].length === 18) {
        membro = message.guild.members.cache.get(args[0]) || args[0];
    } else {
        message.channel.send(unkn).then(m => {
m.delete({timeout: 15000})
})
        return 0;
    }
  

    if (typeof membro !== "string") {
        if (membro.id === message.guild.ownerID) {
            message.channel.send('<a:Asukie_Errado:767937012287537163> **|** Você não pode banir o usuário com a posse do servidor, bobinho.')
            return 0;
        }
        if (membro.id === client.user.id) {
            message.channel.send('Você não pode utilizar este comando em mim.')
            return 0;
        }
        let executorRole = message.member.highestRole;
        let targetRole = membro.highestRole;
        if (executorRole.comparePositionTo(targetRole) <= 0 && message.author.id !== message.guild.ownerID) {
            message.channel.send(perm)
            return 0;
        }
        let clientRole = message.guild.me.highestRole;
        if (clientRole.comparePositionTo(targetRole) <= 0) {
            message.reply("Não tenho permissão para banir este usúario");
            return 0;
        }
    }
  let cma = new Discord.MessageEmbed()
    .setAuthor(
      `Confirme a ação a seguir:`,
      "https://cdn.discordapp.com/emojis/753354762350493796.gif?v=1"
    )
    .addField(
      `<:setamarela:736597556913504312> **Deseja realmente banir o usuário abaixo?**`,
      `ㅤ${membro} (\`${membro.id}\`)`
    )
    .addField(
      `<:notepad:735956294854377603> **| Motivo inserido:**`,
      `ㅤ${motivo}`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );

  let confirm_msg = await message.channel.send(cma);
  confirm_msg.react("747042062263910441");
  confirm_msg.react("746212123901820929");

  let filtro = (reaction, usuario) =>
    reaction.emoji.id === "747042062263910441" &&
    usuario.id === message.author.id;
  let coletor = confirm_msg.createReactionCollector(filtro, { max: 1 });

  let membroban1 = new Discord.MessageEmbed()
    .setAuthor(
      `Membro banido | Asukie™`,
      "https://images-ext-2.discordapp.net/external/im9ATtqKCZRbYiLuwS12FRWrqjQsAnvc1gMKbYjXM64/https/cdn.discordapp.com/emojis/637125668601200640.gif"
    )
    .setThumbnail(
      `https://media.discordapp.net/attachments/618150447261417492/626945093923766284/giphy_1.gif?width=453&height=453`
    )
    .addFields(
      {
        name: "<:autorolymus:747042714725646336> **| Autor do Banimento:**",
        value:
          `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${message.author.tag}\`\n` +
          `ㅤ<:SetaZu:765288356913086484> **ID:** \`${message.author.id}\``,
        inline: true
      },
      {
        name: `<:user:736597556963836054> **| Usuário Banido:**`,
        value:
          `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${membro.tag}\`\n` +
          `ㅤ<:SetaZu:765288356913086484> **ID:** \`${membro.id}\``,
        inline: true
      },
      {
        name: "<:notepad:735956294854377603> **| Motivo:**",
        value: `ㅤ${motivo}`
      }
    );

  let membroban = new Discord.MessageEmbed()
    .setAuthor(
      `Você foi banido | Asukie™`,
      "https://cdn.discordapp.com/emojis/766406396337193020.png?v=1"
    )
    .setThumbnail(
      `https://media.discordapp.net/attachments/618150447261417492/626945093923766284/giphy_1.gif?width=453&height=453`
    )
    .addFields(
      {
        name: "<:autorolymus:747042714725646336> **| Autor do Banimento:**",
        value:
          `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${message.author.tag}\`\n` +
          `ㅤ<:SetaZu:765288356913086484> **ID:** \`${message.author.id}\``,
        inline: true
      },
      {
        name: "<:painel:737350900070350941> **| Servidor:**",
        value: `ㅤ<:SetaZu:765288356913086484> \`${message.guild.name}\``,
        inline: true
      },
      {
        name: "<:notepad:735956294854377603> **| Motivo:**",
        value: `ㅤ${motivo}`
      }
    )
    .setColor(`#0f4bff`);
  let banido = new Discord.MessageEmbed()
    .setTitle(`Sistema de Punições | Asukie™`)
    .setColor(`#0f4bff`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(
      `<:SetaZu:765288356913086484> **| Usuário Banido:**`,
      `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${membro.user.tag}\`\n` +
        `ㅤ<:SetaZu:765288356913086484> **ID:** \`${membro.id}\``
    )
    .addField(
      `<:autorolymus:747042714725646336> **| Autor do Banimento:**`,
      `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${message.author.tag}\`\n` +
        `ㅤ<:SetaZu:765288356913086484> **ID:** \`${message.author.id}\``
    )
    .addField(`<:notepad:735956294854377603> **| Motivo:**`, `ㅤ${motivo}`);
  coletor.on("collect", cp => {
    cp.remove(message.author.id);
    membro.ban();
    membro.send(membroban);
    message.channel.send(banido).then(m => {
      m.delete({ timeout: 9000 });
    });
    confirm_msg.delete();
  });

  let filtro2 = (reaction, usuario) =>
    reaction.emoji.id === "746212123901820929" &&
    usuario.id === message.author.id;
  let coletor2 = confirm_msg.createReactionCollector(filtro2, { max: 1 });

  coletor2.on("collect", cp => {
    confirm_msg.delete();
  })
}
}