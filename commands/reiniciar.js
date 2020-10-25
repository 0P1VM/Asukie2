const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  
const owner = "268403900355313674"; //não muda ainda deixa eu testar
    if (message.author.id === owner) {
        message.channel.send(`<a:Asukie_Certo:766437760381878282> | Ok, ${message.author}, Iniciando processo de reiniciação....`).then(m => {
m.delete({timeout: 5000})
})

        setTimeout(() => {
            process.exit(0);
        }, 5000); 
    } else {
        return;
        console.log('Fui Reiniciada com sucesso.')
        }
    }
    exports.help = {
    name: 'reiniciar',
    aliases: ['religar']
}