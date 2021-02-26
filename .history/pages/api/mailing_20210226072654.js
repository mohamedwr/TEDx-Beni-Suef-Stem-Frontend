import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		let { email } = req.body;


				axios
					.post(
						`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_API}/sendMessage`,
						{
							chat_id: process.env.TELEGRAM_DEVIEN_CHAT_ID,
							text: `<i><b>MAILING</b></i>\n\n<b>Email:</b> \t${email}`,
							parse_mode: 'HTML',
						}
					)
					.then((res) => {
						res.status(200).send(res);
					});
			.catch((err) => {
				res.send(err);
			});
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
