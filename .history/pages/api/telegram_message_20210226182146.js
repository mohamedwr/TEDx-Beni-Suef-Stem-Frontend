import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message, subject } = req.body;
		const chatIdYoussef = process.env.TELEGRAM_YOUSSEF_CHAT_ID;
		const chatIdDevien = process.env.TELEGRAM_DEVIEN_CHAT_ID;
		const botToken = process.env.TELEGRAM_BOT_API;

		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatIdYoussef,
				text: `<i><b>---|CONTACT US|---</b></i>\n\n<b>Name:</b> \t${name}\n\n<b>Email:</b> \t${email}\n\n<b>Subject:</b> \t${subject}\n\n<b>Message:</b> \t${message}`,
				parse_mode: 'HTML',
			});

			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatIdDevien,
				text: `<i><b>---|CONTACT US|---</b></i>\n\n<b>Name:</b> \t${name}\n\n<b>Email:</b> \t${email}\n\n<b>Subject:</b> \t${subject}\n\n<b>Message:</b> \t${message}`,
				parse_mode: 'HTML',
			});
			res.status(200).json({ completed: true });
		} catch (error) {
			res.status(403).json({ completed: false });
		}
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
