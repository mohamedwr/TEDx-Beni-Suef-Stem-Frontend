import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		let { email } = req.body;

		axios
			.post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
				chat_id: process.env.TELEGRAM_YOUSSEF_CHAT_ID,
				text: `<i><b>MAILING</b></i>\n\n<b>Email:</b> \t${email}`,
				parse_mode: 'HTML',
			})
			.then((response) => {
				res.status(200).send(response);
			})
			.catch((error) => {
				res.send(error);
			});
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
