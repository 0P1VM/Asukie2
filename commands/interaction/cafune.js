const Discord = require('discord.js');

module.exports = {
    name: 'cafune',
    aliases: ['cafuné', 'cafune'],
run: async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

    var list = [
        'https://media.tenor.com/images/c5acf899741117647a56c80ad6f459ca/tenor.gif',
        'https://pa1.narvii.com/6499/f1ce20af6c00673889174e90a15bcfbde72f5103_00.gif',
        'https://media.tenor.com/images/c7192cc8ffa738690156fbb9334a8937/tenor.gif',
        'https://media1.tenor.com/images/827ced08ea7958849c908c74d738f9b0/tenor.gif?itemid=16742458',
        'https://media1.tenor.com/images/7a7d613610b4fa7d9e35f38a59001e6f/tenor.gif?itemid=7343376',
        'https://media1.tenor.com/images/7a7d613610b4fa7d9e35f38a59001e6f/tenor.gif?itemid=7343376'
      ];
      
      var rand = list[Math.floor(Math.random() * list.length)];
      let user = message.mentions.users.first() || client.users.cache.get(args[0]);
      if (!user) {
      return message.reply('<a:errado:753245066965024871> **|** Mecione um usuário valido.');
      }
      /*
      message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
      */
      let avatar = message.author.displayAvatarURL({format: 'png'});
        const embed = new Discord.MessageEmbed()
              .setColor('#8500de')
              .setDescription(`${message.author} acaba de fazer um cafuné em ${user} <:cafune:762803835546107916>`)
              .setImage(rand)
              .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        await message.channel.send(embed);
      }
  }