import TelegramBot from 'node-telegram-bot-api';

export default function handler(req, res) {
	if (req.method === 'POST') {
		const token = process.env.TELEGRAM_BOT_API;
		let bot = new TelegramBot(token);
		let { email, name, subject, message } = req.body;

		bot.sendMessage(
			process.env.TELEGRAM_YOUSSEF_CHAT_ID,
			`<b>Name:</b> \t${name}\n<b>Email:</b> \t${email}\n<b>Subject:</b> \t${subject}\n<b>Message:</b> \t${message}`,
			{ parse_mode: 'HTML' }
		);

		res.status(200).json({ email, name, message, subject });
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
