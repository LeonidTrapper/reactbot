'use strict';
const Discord = require('discord.js');
const randomPuppy = require(`random-puppy`);

module.exports = {
	name: `meme`,
	category: `fun`,
	description: `Отправляет какую-то хуйню`,
	run: async (client, message, args) => {
			// Отключает каналы

	if(message.channel.id === `596047655336017921` || message.channel.id === `596047747765895223` || message.channel.id === `596047967933169727`) {
		return;
	} else {
		const subReddits = ["Shitty_Car_Mods", "carporn"];
		const random = subReddits[Math.floor(Math.random() * subReddits.length)];

		const img = await randomPuppy(random);

		
		let embed = new Discord.MessageEmbed()
		.setTitle(`/r/${random}`)
		.setColor(`#6626f0`)
		.setImage(img)
		.setURL(`https://reddit.com/r/${random}`)
		.setFooter(`Leonid.bot`)

		message.channel.send(embed).catch(err => {})
	}
	}
}

module.exports.help = {
    name: "car"
}