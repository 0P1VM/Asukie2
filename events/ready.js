module.exports = async client => {
  console.log(`Iniciado em ${client.user.tag}\n\n`)
var tabela = [
{
  name: `Saiba como me adicionar pelo ${client.config.prefix}ajuda`,
  type: "STREAMING",
  url: "https://www.twitch.tv/asukie"
},
{
	name: `Encontrou falhas? Reporte para o suporte.`,
	type: "STREAMING",
	url: "https://www.twitch.tv/asukie"
},
{
	name: `em ${client.guilds.cache.size} servidores 💙`,
	type: "STREAMING",
	url: "https://www.twitch.tv/asukie"
},
];

function setStatus() {
  var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
  client.user.setActivity(altstatus);
}

setStatus();
setInterval(() => setStatus(), 1000);
console.log(`Servidores: ${client.guilds.cache.size}\nUsuários: ${client.users.cache.size}`)
}