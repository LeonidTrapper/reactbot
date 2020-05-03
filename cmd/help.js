const Discord = require('discord.js');
const cfg = require(`../config.json`);
let prefix = cfg.prefix;

module.exports.run = async (bot, message, args) => {

if(message.channel.type === "dm") {
	return;
} 


let botembed = new Discord.MessageEmbed()
.setDescription("Help")
.setColor(`#f79525`)
.setThumbnail(`https://sun9-62.userapi.com/u-ScTG02JlqgjTVKr40PlFQ-f8tF85EmRu6jMw/jV1mlnR4kxE.jpg`)
.addField("Основные команды:", `${prefix}help помощь по командам\n${prefix}ping - пинг`)
.addField("Развлечения:", `${prefix}meme - рандомный мемчик\n${prefix}car - рандомный автомобиль\n${prefix}ast - аестетичная фоточка\n${prefix}neko - рандомная пикча с неко`)
.addField("NSFW:", `${prefix}hentai - рандомная пикча с хентаем`)
.setImage()
.setFooter(`Leonid.bot`, `https://i.pinimg.com/originals/8e/fb/ae/8efbae871f6792ba76d7ae3b6e422408.jpg`)

return message.channel.send(botembed).cath(err => {})


}

module.exports.help = {
    name: "help"
}