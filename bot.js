const Discord 	 = require('discord.js');
const bot		 = new Discord.Client();
const cfg 		 = require(`./config.json`);
const fs         = require("fs");
bot.commands     = new Discord.Collection();
const token 	 = cfg.token;
const prefix 	 = cfg.prefix;

bot.login(process.env.token).then(() => console.log(`Login|`,`Бот активен\nТег бота: ${bot.user.tag}`)).catch(err => { console.log(`Login|`,`Произошла ошибка. Напиши мне в лс Leonid#9085`), console.log(err) })





//////////////////////////////////////  Не трогай  ////////////////////////////////////////////


// fs
fs.readdir("./cmd", (err, files) => {
	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");

// bot cmds set
jsfile.forEach((f, i) => {
	let props = require(`./cmd/${f}`);
	bot.commands.set(props.help.name, props);
});

})

// Проверка автора сообщения, текстового канала, команды.
bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
let messageArray = message.content.split(" ");
let cmd          = messageArray[0];
let args 		 = messageArray.slice(1);


let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);
});


//////////////////////////////////////  Не трогай  ////////////////////////////////////////////








// Хуйня
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

let fuzzi = new Discord.MessageEmbed()
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
    message.delete().then(() => bot.channels.cache.get("706201787056783410").send(fuzzi))
  }
  if (message.content.includes("http://")) {
    message.delete().then(() => bot.channels.cache.get("706201787056783410").send(fuzzi))
  }
  if (message.content.includes("www.")) {
    message.delete().then(() => bot.channels.cache.get("706201787056783410").send(fuzzi))
  }

}
//


	// !ping
	if(message.content.startsWith(`${prefix}ping`)) {
			let fuz = new Discord.MessageEmbed()
			.setColor(`#f00a0a`)
			.addField("⏳", `Ожидайте...`)
		const m = await message.channel.send(fuz);
		let fuzz = new Discord.MessageEmbed()
		.setColor(`#1996e3`)
		.addField("⏳", m.createdTimestamp - message.createdTimestamp + ` ms`)
   		 m.edit(fuzz)
  }
})





bot.on(`ready`, async (ready) => {
	bot.user.setStatus(`dnd`);
	bot.user.setActivity(`за фоточками | Префикс: ${prefix}`, { type: 'WATCHING' });
})