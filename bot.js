const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require(`./config.json`);
const token = cfg.token;
const prefix = cfg.prefix;

bot.login(process.env.token).then(() => console.log(`Login|`,`Бот активен\nТег бота: ${bot.user.tag}`)).catch(err => { console.log(`Login|`,`Произошла ошибка. Напиши мне в лс Leonid#9085`), console.log(err) })

bot.on(`message`, async (message) => {
	if(message.channel.id != `596047967933169727`) {
		return;
	} else {
		if(message.content != `jdckermgiorefjerТТЫЛОХБЛЯТЬiojgriovjrwo33`) {
			message.react(`🔥`).catch(err => { console.log(`React|`,`Не удалось выдать реакцию`) })
		}
	}
	if(message.channel.id != `681057983391989772`) {
		return;
	} else {
		if(message.content != `jdckermgiorefjerТТЫЛОХБЛЯТЬiojgriovjrwo33`) {
			const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'okee');
			message.react(emoji);
		}
	}
})

bot.on(`ready`, async (ready) => {
	bot.user.setStatus(`dnd`);
	bot.user.setActivity(`за фоточками | Префикс: ${prefix}`, { type: 'WATCHING' });
})
