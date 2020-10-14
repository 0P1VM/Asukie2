const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 message.delete();

        let perm = new Discord.MessageEmbed()
	.setDescription(`<a:Bnao:746212123901820929> | Você não tem permissão para banir este usuário.`)
	.setColor(`#8500de`)
	.setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

	var membro = message.mentions.members.first() || client.users.cache.get(args[0]);
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:Bnao:746212123901820929> | Desculpe, ${message.author}. É necessário ter a permissão de **BAN_MEMBERS** para executar este comando!`)
	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:Bnao:746212123901820929> | Oops! eu não tenho a permissão de **BAN_MEMBERS**, portanto não posso executar esta ação!`)
	if (!membro) return message.channel.send(`<a:Bnao:746212123901820929> | ${message.author} utilize o comando.\n` +
	`> **Exemplo:** ${client.config.prefix}ban @usuario motivo`).then(m => {
    m.delete({timeout : 9000})
  })
        if (membro === message.member) return message.channel.send(perm).then(m => {
    m.delete({timeout : 9000})
  })

        var motivo = args.slice(1).join(" ");
	if(!motivo) motivo = ("Motivo não inserido");
        
	let cma = new Discord.MessageEmbed()
	.setAuthor(`Confirme a ação a seguir:`, 'https://cdn.discordapp.com/emojis/753354762350493796.gif?v=1')
	.addField(`<:setamarela:736597556913504312> **Deseja realmente banir o usuário abaixo?**`, `ㅤ${membro} (\`${membro.id}\`)`)
	.addField(`<:notepad:735956294854377603> **| Motivo inserido:**`, `ㅤ${motivo}`)
	.setColor(`#8500de`)
	.setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
	
	let confirm_msg = await message.channel.send(cma)
	confirm_msg.react("747042062263910441");
	confirm_msg.react("746212123901820929")

	let filtro = (reaction, usuario) => reaction.emoji.id === "747042062263910441" && usuario.id === message.author.id;
	let coletor = confirm_msg.createReactionCollector(filtro, {max: 1});

   let membroban1 = new Discord.MessageEmbed()
	.setAuthor(`Membro banido | Asukie™`, 'https://images-ext-2.discordapp.net/external/im9ATtqKCZRbYiLuwS12FRWrqjQsAnvc1gMKbYjXM64/https/cdn.discordapp.com/emojis/637125668601200640.gif')
        .setThumbnail(`https://media.discordapp.net/attachments/618150447261417492/626945093923766284/giphy_1.gif?width=453&height=453`)
	.addFields(
		{ name: '<:autorolymus:747042714725646336> **| Autor do Banimento:**', value: `ㅤ<:nextgv:747044446851432449> **Tag:** \`${message.author.tag}\`\n` +
		`ㅤ<:nextgv:747044446851432449> **ID:** \`${message.author.id}\``, inline: true },
		{ name: `<:user:736597556963836054> **| Usuário Banido:**`, value: `ㅤ<:nextgv:747044446851432449> **Tag:** \`${membro.tag}\`\n` +
	`ㅤ<:nextgv:747044446851432449> **ID:** \`${membro.id}\``, inline: true },
		{ name: '<:notepad:735956294854377603> **| Motivo:**', value: `ㅤ${motivo}`},
	)

        let membroban = new Discord.MessageEmbed()
	.setAuthor(`Você foi banido | Asukie™`, 'https://images-ext-2.discordapp.net/external/im9ATtqKCZRbYiLuwS12FRWrqjQsAnvc1gMKbYjXM64/https/cdn.discordapp.com/emojis/637125668601200640.gif')
        .setThumbnail(`https://media.discordapp.net/attachments/618150447261417492/626945093923766284/giphy_1.gif?width=453&height=453`)
	.addFields(
		{ name: '<:autorolymus:747042714725646336> **| Autor do Banimento:**', value: `ㅤ<:nextgv:747044446851432449> **Tag:** \`${message.author.tag}\`\n` +
		`ㅤ<:nextgv:747044446851432449> **ID:** \`${message.author.id}\``, inline: true },
		{ name: '<:painel:737350900070350941> **| Servidor:**', value: `ㅤ<:nextgv:747044446851432449> \`${message.guild.name}\``, inline: true },
		{ name: '<:notepad:735956294854377603> **| Motivo:**', value: `ㅤ${motivo}`},
		
	)
	.setColor(`#8500de`)
	let banido = new Discord.MessageEmbed()
	.setTitle(`Sistema de Punições | Asukie™`) 
	.setColor(`#8500de`) 
	.setThumbnail(message.author.displayAvatarURL({dynamic: true}))    
	.addField(`<:user:736597556963836054> **| Usuário Banido:**`, `ㅤ<:nextgv:747044446851432449> **Tag:** \`${membro.user.tag}\`\n` +
	`ㅤ<:nextgv:747044446851432449> **ID:** \`${membro.id}\``)
	.addField(`<:autorolymus:747042714725646336> **| Autor do Banimento:**`, `ㅤ<:nextgv:747044446851432449> **Tag:** \`${message.author.tag}\`\n` +
	`ㅤ<:nextgv:747044446851432449> **ID:** \`${message.author.id}\``) 
	.addField(`<:notepad:735956294854377603> **| Motivo:**`, `ㅤ${motivo}`)
	  coletor.on("collect", cp => {
          cp.remove(message.author.id);
                   membro.ban();
		   
          membro.send(membroban)
	  message.channel.send(banido).then(m => {
    m.delete({timeout : 9000})
  })
          confirm_msg.delete()
})

         let filtro2 = (reaction, usuario) => reaction.emoji.id === "746212123901820929" && usuario.id === message.author.id;
          let coletor2 = confirm_msg.createReactionCollector(filtro2, {max: 1});

          coletor2.on('collect', cp => {

          confirm_msg.delete()
          
          })

}