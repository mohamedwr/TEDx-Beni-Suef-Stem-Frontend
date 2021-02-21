import db from '../../../db/config';

export default function handler(req, res) {
	if (req.method === 'GET') {
		db('posts')
			.where('id', req.query.id)
			.first()
			.then((post) => {
				res.status(200).json(post);
			});
	}
}
