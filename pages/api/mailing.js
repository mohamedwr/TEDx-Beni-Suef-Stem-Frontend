import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		let { email } = req.body;
		const conf = {
			headers: {
				pass: process.env.PASSWORD,
			},
		};
		axios
			.post('https://tedx-telegram-server.herokuapp.com/sendmailing', {
				email,
			})
			.then(() => {
				res.status(200).json({ email });
			})
			.catch(() => {
				res.status(403).json({ message: 'Some error happened' });
			});

		// Saving mail info into sqlite DB
		// db('mailing')
		// 	.insert({ email: email })
		// 	.then(() => {
		// 	});
	} else if (req.method === 'GET') {
		// db('mailing')
		// 	.select('*')
		// 	.then((data) => {
		// 		, mails: data
		// 	});
		res.status(200).json({ message: 'GET Request' });
	}
}
