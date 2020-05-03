const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
	name: `ast`,
	category: `fun`,
	description: `Отправляет какую-то хуйню`,
	run: async (client, message, args) => {
			// Отключает каналы

	if(message.channel.id === `596047655336017921` || message.channel.id === `596047747765895223` || message.channel.id === `596047967933169727`) {
		return;
	} else {
		
		const rando = 
		[
			akaneko.nsfw.ass(),
			akaneko.nsfw.bdsm(),
			akaneko.nsfw.cum(),
			akaneko.nsfw.doujin(),
			akaneko.nsfw.hentai(),
			akaneko.lewdNeko(),
		]

		
		let embed = new Discord.MessageEmbed()
		.setColor(`#e8002b`)
		.setImage(rando[Math.floor(Math.random() * rando.length)])
		.setFooter(`Leonid.bot`)

		message.channel.send(embed).cath(err => {})
	}
	}
}

module.exports.help = {
    name: "hentai"
}