'use strict';
const Discord = require('discord.js');
const cfg = require(`../config.json`);
let prefix = cfg.prefix;

module.exports.run = async (bot, message, args) => {

if(message.channel.type === "dm") {
	return;
} 

	// Отключает каналы

	if(message.channel.id === `596047655336017921` || message.channel.id === `596047747765895223` || message.channel.id === `596047967933169727`) {
		return;
	} else {

let botembed = new Discord.MessageEmbed()
.setAuthor(`Help`, `https://sun9-25.userapi.com/-VvxjFnnUMmCUqwhMMzYR1vaRM6fPWS-pQB4aA/7UmzbpSKUiE.jpg`)
.setColor(`#f79525`)
.setThumbnail(`https://sun9-62.userapi.com/u-ScTG02JlqgjTVKr40PlFQ-f8tF85EmRu6jMw/jV1mlnR4kxE.jpg`)
.addField("Основные команды:", `${prefix}help помощь по командам\n${prefix}ping - пинг`)
.addField("Развлечения:", `${prefix}meme - рандомный мемчик\n${prefix}car - рандомный автомобиль\n${prefix}ast - аестетичная фоточка\n${prefix}gif - рандомная гифка ( ENG )`)
.addField(`Арты:`, `${prefix}neko - рандомная пикча с неко\n${prefix}anime - рандомный аниме арт ( тестирование команды )\n${prefix}jojo - рандомная пикча по Джо Джо`)
.addField("NSFW:", `${prefix}hentai - рандомная пикча с хентаем`)
.addFields(
{name: `Задать вопрос:`, value: `Leonid#9085`, inline: true},
{name: `Страница создателя:`, value: `https://vk.com/leonidtrapper`, inline: true},
)
.setFooter(message.author.username, message.author.avatarURL())

return message.channel.send(botembed).catch(err => {})

}
}

module.exports.help = {
    name: "help"
}