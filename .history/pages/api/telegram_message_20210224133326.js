import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message, subject } = req.body;
		const conf = {
			headers: {
				pass: process.env.PASSWORD,
			},
		};
		axios
			.post('https://tedx-telegram-server.herokuapp.com/sendcontact', {
				email,
				name,
				message,
				subject,
			})
			.then(() => {
				res.status(200).json({ email, name, message, subject });
			})
			.catch(() => {
				res.status(403).json({ message: 'Some error happened' });
			});
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
