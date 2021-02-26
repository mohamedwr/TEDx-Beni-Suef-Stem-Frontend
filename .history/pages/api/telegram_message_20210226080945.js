import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message, subject } = req.body;
		const conf = {
			headers: {
				pass: process.env.PASSWORD,
			},
		};
		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: `<i><b>CONTACT US</b></i>\n\n<b>Name:</b> \t${name}\n<b>Email:</b> \t${email}\n<b>Subject:</b> \t${subject}\n<b>Message:</b> \t${message}`,
				parse_mode: 'HTML',
			});
			res.status(200).json({ email, name, message, subject });
		} catch (error) {
			res.status(403).json({ message: 'Some error happened' });
		}

	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
