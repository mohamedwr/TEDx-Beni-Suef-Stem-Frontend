import db from '../../db/config';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		// let mails = await db('mailing').select('*');

		res.status(200).json({ message: 'GET Request' });
	}
}
