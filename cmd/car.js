const Discord = require('discord.js');
const randomPuppy = require(`random-puppy`);

module.exports = {
	name: `meme`,
	category: `fun`,
	description: `Отправляет какую-то хуйню`,
	run: async (client, message, args) => {
		const subReddits = ["Shitty_Car_Mods", "carporn"];
		const random = subReddits[Math.floor(Math.random() * subReddits.length)];

		const img = await randomPuppy(random);

		
		let embed = new Discord.MessageEmbed()
		.setTitle(`Прямиком из /r/${random}`)
		.setColor(`#6626f0`)
		.setImage(img)
		.setURL(`https://reddit.com/r/${random}`)
		.setFooter(`Leonid.bot`)

		message.channel.send(embed).cath(err => {})
	}
}

module.exports.help = {
    name: "car"
}