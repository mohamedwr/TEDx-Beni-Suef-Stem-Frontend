import { useEffect } from 'react';
import posts from '../../posts.json';

// Components
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const news = () => {
	useEffect(() => {
		document.body.classList.add('bg-bg');
		return () => {
			document.body.classList.remove('bg-bg');
		};
	}, []);

	return (
		<>
			<Nav />
			<div className='container py-5 md:px-52'>
				<div className='grid grid-cols-1 gap-5'>
					{posts.map((post) => (
						<Card
							id={post.id}
							title={post.title}
							author={post.author}
							time={post.createdAt}
							img={post.img}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default news;
