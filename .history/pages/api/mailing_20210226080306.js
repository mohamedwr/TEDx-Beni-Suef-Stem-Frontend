import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		let { email } = req.body;
		let chatId = process.env.TELEGRAM_DEVIEN_CHAT_ID;
		let botToken = '1649848445:AAHVSh6oipeaPyua_ms0mo2cDO9Jp1lCQXI';
		try {
			await axios
				.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
					chat_id: chatId,
					text: `<i><b>MAILING</b></i>\n\n<b>Email:</b> \t${email}`,
					parse_mode: 'HTML',
				});
				res.status(200).end({ res });
				console.log('completed');
		} catch (error) {
			console.log('failed');
			res.status(500).end({ err });
		}
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
