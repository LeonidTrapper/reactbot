const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require(`./sys/config.json`);
const color = require('colors');
const token = cfg.token;
const prefix = cfg.prefix;

bot.login(token).then(() => console.log(`Login|`.green.bold,`Бот активен\nТег бота: ${bot.user.tag}`)).catch(err => { console.log(`Login|`.red.bold,`Произошла ошибка. Напиши мне в лс Leonid#9085`), console.log(err) })

bot.on(`message`, async (message) => {
	if(message.channel.id != `681057983391989772`) {
		return;
	} else {
		if(message.content != `jdckermgiorefjerТТЫЛОХБЛЯТЬiojgriovjrwo33`) {
			message.react(`🔥`).catch(err => { console.log(`React|`.red.bold,`Не удалось выдать реакцию`) })
		}
	}
})