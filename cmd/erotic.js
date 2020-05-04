'use strict';
const Discord = require('discord.js');
const randomPuppy = require(`random-puppy`);

module.exports = {
	name: `erotic`,
	category: `fun`,
	description: `Отправляет какую-то хуйню`,
	run: async (client, message, args) => {

	// Отключает каналы

	if(message.channel.id === `596047655336017921` || message.channel.id === `596047747765895223` || message.channel.id === `596047967933169727`) {
		return;
	} else {
		const pics = require(`../pics.json`)
		const random = pics[Math.floor(Math.random() * pics.length)];

		
		let embed = new Discord.MessageEmbed()
		.setTitle(`Полная версия`)
		.setURL(random)
		.setColor(`#e880ed`)
		.setImage(random)
		.setFooter(`Leonid.bot`)

		message.channel.send(embed).catch(err => { console.log(err)})
	}
	}
}

module.exports.help = {
    name: "erotic"
}