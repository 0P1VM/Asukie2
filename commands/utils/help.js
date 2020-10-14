const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
message.delete();

    let painel = new Discord.MessageEmbed()
    .setColor("#8500de") 
    .setAuthor(`Asukie™ - ${client.config.v}`, client.user.displayAvatarURL({ dynamic:true }))
	.setDescription(`\n**Links Importantes:\n` +
  `<:seta1:762492762192478216> [Me adicione em seu servidor](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)\n` +
  `<:seta1:762492762192478216> [Vote em mim no top.gg](https://AlgoAqui.com)\n` +
  `<:seta1:762492762192478216> [Meu servidor de suporte](https://discord.gg/n5eNazJ)**`)
	  .addField(`Opções:`, `**<a:um_:763772746386898964> | Administração | MANUTENÇÃO\n` +
    `<a:dois_:763772765412393010> | Moderação | MANUTENÇÃO\n` +
    `<a:tres_:763772976168304650> | Configuração | MANUTENÇÃO\n` +
		`<a:quatro_:763773033415442523> | Interação\n` +
    `<a:cinco_:763773112995020860> | Utilidades | MANUTENÇÃO**`)
    .setFooter(`Página 0 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
	.setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
.setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')

     message.channel.send(painel).then(msg => {
       msg.react('762496132092788767').then(() => msg.react('763772746386898964')).then(() => msg.react('763772765412393010')).then(() => msg.react('763772976168304650')).then(() => msg.react('763773033415442523')).then(() => msg.react('763773112995020860'))
       
      let adm = (reaction, usuario) => reaction.emoji.id === "763772746386898964" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(adm);

      let administracao = new Discord.MessageEmbed()
	 .setColor("#8500de") 
     .setAuthor('Administração', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**・Prefixo:** \`${client.config.prefix}\`\n` +
	 `\n<:setinha:763773726419583017> **Addemoji** - Adicione algum emoji dentro do servidor\n` +
	 `<:setinha:763773726419583017> **Addcargo** - Adicione um cargo, em algum usuário.\n` +
	 `<:setinha:763773726419583017> **Removecargo** - Retire um cargo de algum usuário.\n` +
	 `<:setinha:763773726419583017> **Cargoall** - Adicione algum cargo, para todos dentro do servidor.\n` +
	 `<:setinha:763773726419583017> **Votacao** - Faz uma votação no seu servidor(obs: use o comando no chat onde você irá fazer a votação.)`)
	 .setFooter(`Página 1 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
	 .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
   .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor.on("collect", cp => {

      msg.edit(administracao)
      cp.users.remove(message.author.id)
     
     })

      let mod = (reaction, usuario) => reaction.emoji.id=== "763772765412393010" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(mod);

      let moderacao = new Discord.MessageEmbed()
	 .setColor("#8500de") 
     .setAuthor('Moderação', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**・Prefixo:** \`${client.config.prefix}\`\n` +
`\n<:setinha:763773726419583017> **Clear** - Limpe um chat de 2 a 100 mensagem.\n` +
`<:setinha:763773726419583017> **Lock** - Tranque algum chat, para os membros não falar.\n` +
`<:setinha:763773726419583017> **Unlock** - Destranque o chat que esteja trancado.\n` +
`<:setinha:763773726419583017> **Mute** - Mute algum usuário por um determinado tempo.\n` +
`<:setinha:763773726419583017> **Unmute** - Desmute o usuário que esteja mutado.\n` +
`<:setinha:763773726419583017> **Slowmode** - Coloque uma quantidade de segundos, em um chat pra os membros falarem com uma menor frequência\n` +
`<:setinha:763773726419583017> **Ban** - Bani um determinado usúario.\n` +
`<:setinha:763773726419583017> **Unban** - Desbani algum usuário pelo id dele.\n` +
`<:setinha:763773726419583017> **Kick** - Expulse algum membro do seu servidor.\n` +
`<:setinha:763773726419583017> **Warn** - De um aviso pra algum usuário.\n` +
`<:setinha:763773726419583017> **Allunban** - Desbani todos os usuários banidos do seu servidor.`)
 .setFooter(`Página 2 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
 .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
     coletor2.on("collect", cp => {

      msg.edit(moderacao)
     cp.users.remove(message.author.id)
     })

      let config = (reaction, usuario) => reaction.emoji.id === "763772976168304650" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(config);

      let configuracao = new Discord.MessageEmbed()
     	 .setColor("#8500de") 
     .setAuthor('Configuração', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**・Prefixo:** \`${client.config.prefix}\`\n` +
 `\n<:setinha:763773726419583017> **Defesa** - Deixe seu servidor muito mas seguro.\n` +
 `<:setinha:763773726419583017> **Autorole** - Ative autorole dos bots e membros.\n` +
 `<:setinha:763773726419583017> **Painel** - Veja o painel do servidor.\n` +
 `<:setinha:763773726419583017> **Welcome** - Configure o sistema de entrada/saída.\n` +
 `<:setinha:763773726419583017> **Logs** - Selecione um chat para aparecer mensagens deletadas/editada etc.\n` +
 `<:setinha:763773726419583017> **Imunidade** - Selecione chat/cargo, que ser alguma defesa estiver ativada, o bot não irá excluir.\n` +
 `<:setinha:763773726419583017> **Sugestão** - Configure algum chat para sugestões dos membros.\n` +
 `<:setinha:763773726419583017> **Contador** - Coloque no mínimo 10 chats, onde o bot irá contar os membros do servidor todo.`)
  .setFooter(`Página 3 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor3.on("collect", cp => {

      msg.edit(configuracao)
     cp.users.remove(message.author.id)
      })

      let int = (reaction, usuario) => reaction.emoji.id === "763773033415442523" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(int);

      let interacao = new Discord.MessageEmbed()
     	 .setColor("#8500de") 
     .setAuthor('Interação', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**・Prefixo:** \`${client.config.prefix}\`\n` +
 `\n<:setinha:763773726419583017> **Cocegas** - Faça cócegas em algum amiguinho.\n` +
 `<:setinha:763773726419583017> **Primeiraspalavras** - Primeiras palavras de um bebê.\n` +
 `<:setinha:763773726419583017> **Say** - Escreva algo como se fosse a própria Asukie escrevendo.\n` +
 `<:setinha:763773726419583017> **Kiss** - Beije seu crush.\n` +
 `<:setinha:763773726419583017> **Neko** - Veja melhores gifs de neko.\n` +
 `<:setinha:763773726419583017> **Ship** - Faça um ship de algum casal.\n` +
 `<:setinha:763773726419583017> **Cafune** - Faça um cafuné em algum amigo(a).\n` +
 `<:setinha:763773726419583017> **Tapa** - De um tapa em alguém.\n` +
 `<:setinha:763773726419583017> **Mcskin** - É um comando pra você conseguir a skin de alguma conta do Minecraft.\n` +
 `<:setinha:763773726419583017> **Mchead** - É um comando pra você conseguir a Cabeça de alguma conta do Minecraft.\n` +                   
 `<:setinha:763773726419583017> **Conquista** - Use o comando, e conquiste oque mais deseja.\n` +
 `<:setinha:763773726419583017> **Matar** - Mate alguém. **(Leve o comando na zoeira)**\n` +
 `<:setinha:763773726419583017> **Hackear** - "hackei" alguém. **(Leve o comando na zoeira)**\n` +
 
 `<:setinha:763773726419583017> **Duvida** - Deixa eu tirar uma dúvida sua.\n` +
 `<:setinha:763773726419583017> **Hug** - De um abraço em algum amigo(a).\n` +                   
 `<:setinha:763773726419583017> **Cronometro** - Irei cronometrar um tempo pra você.\n` +                    
 `<:setinha:763773726419583017> **Clima** - Veja o clima de alguma cidade.\n` +                   
 `<:setinha:763773726419583017> **Dado** - Jogue dado comigo.\n` +
 `<:setinha:763773726419583017> **Roletarussa** - Jogue roletarussa comigo.\n` +                   
 `<:setinha:763773726419583017> **Baka** - Chame alguém de baka.`)
  .setFooter(`Página 4 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor4.on("collect", cp => {

      msg.edit(interacao)
     cp.users.remove(message.author.id)
     })

      let uti = (reaction, usuario) => reaction.emoji.id === "763773112995020860" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(uti);

      let utilidade = new Discord.MessageEmbed()
     	 .setColor("#8500de") 
     .setAuthor('Utilidade', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**・Prefixo:** \`${client.config.prefix}\`\n` +
     `<:setinha:763773726419583017> **Cpu** - Veja minhas configurações de cpu.\n`+
     `<:setinha:763773726419583017> **Avatar** - Veja seu avatar em um tamanho maior ou de outro membro.\n` +
     `<:setinha:763773726419583017> **Rankinvite** - Veja o rank de invite.\n` +
     `<:setinha:763773726419583017> **Covid** - Veja os casos de covid pelo mundo, ou no seu Pais.\n` +
     `<:setinha:763773726419583017> **Covidsin** - Veja os sinais do Covid19 e se cuide.\n` +
     `<:setinha:763773726419583017> **Cronometro** - Irei cronometrar um tempo pra você.\n` +
     `<:setinha:763773726419583017> **Botinfo** - Veja informações do bot toda.\n` +
     `<:setinha:763773726419583017> **Ping** - Veja a velocidade da mensagem do bot.\n` + 
     `<:setinha:763773726419583017> **Servericon** - Veja a foto do servidor em tamanho maior.\n` +
     `<:setinha:763773726419583017> **Serverinfo** - Veja as informações do servidor.\n` +
     `<:setinha:763773726419583017> **Userinfo** - Veja informações de algum usuário.\n` +
     `<:setinha:763773726419583017> **Emojiinfo** - Veja informações de algum emoji do seu servidor.\n` +
     `<:setinha:763773726419583017> **Emoji** - Veja algum emoji em um tamanho maior, pode ser de outros servidores também.`)
  .setFooter(`Página 5 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor5.on("collect", cp => {

      msg.edit(utilidade)
     cp.users.remove(message.author.id)
     })

     let ini = (reaction, usuario) => reaction.emoji.id === "763948077970489366" && usuario.id === message.author.id;
     let coletor6 = msg.createReactionCollector(ini);
      coletor6.on("collect", cp => {

      msg.edit(painel)
      cp.users.remove(message.author.id)
     })
  })
}

exports.help = {
    name: 'help',
    aliases: ['ajuda']
}