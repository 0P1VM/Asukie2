    const Discord = require("discord.js");
let time = ''
exports.run = async (client, message, args) => {
message.delete();

    setTimeout(() => {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have sufficient permissions to perform this command. Please try again");

    var muteMember;
    if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0]) && args[0].length <= 22) {
            muteMember = message.mentions.members.first();
        }
    } else if (/[\d]{18}/.test(args[0]) && args[0].length === 18) {
        muteMember = message.guild.members.cache.get(args[0]) || args[0];
    } else {
        message.reply("Mencione alguém do servidor ou use o ID");
        return 0;
    }
    let time = parseInt(args[2]) * 60000;
    if(!time) return message.channel.send("You did not provide how long to mute this member. Please provide a time in minutes");

    let reason = args.slice(2).join(" ");
    if(!reason) reason = "No reason provided";

    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I do not have sufficient permissions to mute this member. Please try again");





  let muteRole = message.guild.roles.cache.find(role => role.name === "Asukie Mute 🔇");

  if(!muteRole) {
    try {
      muteRole = message.guild.roles.create({
        name: "Asukie Mute 🔇",
        permissions: []
      }) 
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGE: false,
          ADD_REACTIONS: false,
          SEND_TTS_MESSAGES: false,
          ATTACH_FILES: false,
          SPEAK: false
        })
      })
    } catch (e) {
      console.log(e.stack);
    }
  }

    muteMember.addRole(muteRole). then(() => {
      message.delete();
      muteMember.send(`You have been muted in ${message.guild.name} for ${reason}`).catch(err =>console.log(err));
      message.channel.send(`${muteMember.user.username} has been successfully muted`);

      let muteEmbed = new Discord.MessageEmbed()
      .setColor("#")
      .addField("Moderation Action", "mute")
      .addField("Muted Member", muteMember.user.username)
      .addField("Moderator", message.author.username)
      .addField("Reason", reason)
      .addField("Date:", message.createdAt.toLocaleAString());

    let modChannel = message.guild.channels.cache.find(channel => channel.name === "mod-log");

    modChannel.send(muteEmbed);

    })
    }, time)
}