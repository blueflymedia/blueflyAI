import { Bot } from 'grammy';


// Write a simple Telegram bot in three easy steps.

// 1. Create a bot with a token (get it from https://t.me/BotFather)
const bot = new Bot('6066382331:AAGR5Q4ry-fnd-w6rfzWjyqveXc3acD_K7A') // <-- place your token inside this string

// 2. Reply to text messages with the received text
bot.on('message:text', ctx => ctx.reply(ctx.message.text))

// 3. Start the bot
bot.start()
