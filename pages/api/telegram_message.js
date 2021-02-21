import TelegramBot from 'node-telegram-bot-api';
import db from '../../db/config';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const token = process.env.TELEGRAM_BOT_API;
		let bot = new TelegramBot(token);

		let { email, name, subject, message } = req.body;

		// Sending contact info to youssef telegram chat
		bot.sendMessage(
			process.env.TELEGRAM_YOUSSEF_CHAT_ID,
			`<i><b>CONTACT US</b></i>\n\n<b>Name:</b> \t${name}\n<b>Email:</b> \t${email}\n<b>Subject:</b> \t${subject}\n<b>Message:</b> \t${message}`,
			{ parse_mode: 'HTML' }
		);

		// Saving contact info to sqlite DB
		await db('contact')
			.insert({ email, name, subject, message })
			.then(() => {
				res.status(201).json({ message: 'Successful Inserting' });
			});

		res.status(200).json({ email, name, message, subject });
	} else if (req.method === 'GET') {
		let contact = await db('contact').select('*');
		res.status(200).json({ message: 'GET Request', contact: contact });
	}
}
