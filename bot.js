const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require(`./config.json`);
const token = cfg.token;
const prefix = cfg.prefix;

bot.login("NTcyMTQxMTMzMjM3NDUyODMz.Xq22wg.d5kraTY7ko-ScWDV-iEI_8vZvTs").then(() => console.log(`Login|`,`Бот активен\nТег бота: ${bot.user.tag}`)).catch(err => { console.log(`Login|`,`Произошла ошибка. Напиши мне в лс Leonid#9085`), console.log(err) })




bot.on(`message`, async (message) => {
	// Ставит реакцию в аестетик
	if(message.channel.id === `596047655336017921`) {
		const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'd_');
		message.react(emoji);
	}
	//

	// Ставит реакцию в мемес
	if(message.channel.id === `596047747765895223`) {
		const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'ZjEj');
		message.react(emoji);
	}
	//

	// Ставит реакцию в эротик
	if(message.channel.id === `596047967933169727`) {
		const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Fireanim');
		message.react(emoji);
	}
})




bot.on(`message`, async (message) => {

let fuzzi = new Discord.RichEmbed()
		.setDescription("Анти реклама")
		.setColor(`#ff9500`)
		.setThumbnail(`https://sun9-58.userapi.com/c629401/v629401855/3d4fa/WbDpLYB_6HQ.jpg`)
		.addField("Отправитель:", message.author.tag)
		.addField("Удалённое сообщение:", message.content)
		.setFooter(`Leonid.bot`)


// Анти реклама
if(message.channel.id === "596039765309259843") {
	return;
} else {

if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete().then(() => bot.channels.cache.get("706201787056783410").send(fuzzi))
  }
  if (message.content.includes("http://")) {
    message.delete();
    message.delete().then(() => bot.channels.cache.get("706201787056783410").send(fuzzi))
  }
  if (message.content.includes("www.")) {
    message.delete();
    message.delete().then(() => bot.channels.cache.get("706201787056783410").send(fuzzi))
  }

}
//


	// !ping
	if(message.content.startsWith(`${prefix}ping`)) {
			let fuz = new Discord.RichEmbed()
			.setColor(`#f00a0a`)
			.addField("⏳", `Ожидайте...`)
		const m = await message.channel.send(fuz);
		let fuzz = new Discord.RichEmbed()
		.setColor(`#1996e3`)
		.addField("⏳", m.createdTimestamp - message.createdTimestamp + ` ms`)
   		 m.edit(fuzz)
  }
})





bot.on(`ready`, async (ready) => {
	bot.user.setStatus(`dnd`);
	bot.user.setActivity(`за фоточками | Префикс: ${prefix}`, { type: 'WATCHING' });
})