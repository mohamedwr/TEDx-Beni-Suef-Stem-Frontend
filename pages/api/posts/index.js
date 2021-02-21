import db from '../../../db/config';

export default function handler(req, res) {
	if (req.method === 'GET') {
		db('posts')
			.select('*')
			.then((posts) => {
				res.status(200).json(posts);
			});
	}
}
