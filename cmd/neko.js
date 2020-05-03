const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
	name: `neko`,
	category: `fun`,
	description: `Отправляет какую-то хуйню`,
	run: async (client, message, args) => {
		
		let embed = new Discord.MessageEmbed()
		.setColor(`#f2f2f2`)
		.setImage(akaneko.neko())
		.setFooter(`Leonid.bot`)

		message.channel.send(embed)
	}
}

module.exports.help = {
    name: "neko"
}