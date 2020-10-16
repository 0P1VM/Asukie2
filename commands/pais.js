const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pais',
	aliases: ['country'],
	usage: 'pais <país>',
	run: async (client, message, args) => {
    
    
    
    
		const country = args.slice().join(' ');
		if(!country) {
			return message.channel.send(
				'<a:errado:753245066965024871> **|** Escreva o nome de algum País.',
			);
		}
		const url = 'https://restcountries.eu/rest/v2/name/' + country;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				'<a:errado:753245066965024871> **|** Ocorreu algum erro contacte meu Suporte.',
			);
		}
		try{
			const data = response[0];
			const embed = new MessageEmbed()
        .setColor('#0f4bff')
				.setTitle(data.name)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
				.setThumbnail(`https://www.countryflags.io/${data.alpha2Code}/flat/64.png`)
        
				.addFields(
					{ name: 'Nome Nativo', value: `\`\`\`${data.nativeName}\`\`\``, inline: true },
					{ name: 'Capital', value: `\`\`\`${data.capital ? data.capital : 'None'}\`\`\``, inline: true },
					{ name: 'Continente', value: `\`\`\`${data.subregion ? data.subregion : data.region}\`\`\``, inline: true },
					{ name: 'Moeda', value: `\`\`\`${data.currencies[0].symbol}\`\`\``, inline: true },
					{ name: 'População', value: `\`\`\`${data.population.toLocaleString()}\`\`\``, inline: true },
					{ name: 'Área', value: `\`\`\`${data.area.toLocaleString()}km\`\`\``, inline: true },
					{ name: 'Linguagens', value: `\`\`\`${data.languages.map(lang => lang.name).join('/')}\`\`\`` },
				);
			message.channel.send(embed);
		}
		catch{
			return message.channel.send(
  '<a:errado:753245066965024871> **|** O País não existe ou está escrito de uma maneira errada. os paises devem ser escritos em Inglês **ex:** \`Brazil\`, \`Japan\` etc.',
			);
		}
	},
};