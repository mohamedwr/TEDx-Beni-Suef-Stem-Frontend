import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		let { email } = req.body;
		let chatId = process.env.TELEGRAM_DEVIEN_CHAT_ID;
		let botToken = process.env.TELEGRAM_BOT_API;
		console.log(botToken, chatId);
		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
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
