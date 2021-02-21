import TelegramBot from 'node-telegram-bot-api';
import db from '../../db/config';

export default function handler(req, res) {
	if (req.method === 'POST') {
		const token = process.env.TELEGRAM_BOT_API;
		let bot = new TelegramBot(token);
		let { email } = req.body;

		// Sending mail info to youssef telegram chat
		bot.sendMessage(
			process.env.TELEGRAM_YOUSSEF_CHAT_ID,
			`<i><b>MAILING</b></i>\n\n<b>Email:</b> \t${email}`,
			{ parse_mode: 'HTML' }
		);

		// Saving mail info into sqlite DB
		db('mailing')
			.insert({ email: email })
			.then(() => {
				res.status(201).json({ message: 'Successful Inserting' });
			});
	} else if (req.method === 'GET') {
		// db('mailing')
		// 	.select('*')
		// 	.then((data) => {
		// mails: data;
		// 	});
		res.status(200).json({ message: 'GET Request' });
	}
}
