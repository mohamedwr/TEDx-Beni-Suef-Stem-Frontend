import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { email } = req.body;
		const chatIdYoussef = process.env.TELEGRAM_YOUSSEF_CHAT_ID;
		const chatIdDevien = process.env.TELEGRAM_DEVIEN_CHAT_ID;
		const botToken = process.env.TELEGRAM_BOT_API;

		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatIdYoussef,
				text: `<i><b>MAILING</b></i>\n\n<b>Email:</b> \t${email}`,
				parse_mode: 'HTML',
			});

			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatIdDevien,
				text: `<i><b>MAILING</b></i>\n\n<b>Email:</b> \t${email}`,
				parse_mode: 'HTML',
			});
			res.status(200).json({ completed: true });
		} catch (err) {
			res.status(403).json({ completed: false });
		}
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
