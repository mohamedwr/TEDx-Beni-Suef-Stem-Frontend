import { useEffect } from 'react';

// Components
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://res.cloudinary.com/dxaqlmgag/raw/upload/v1613967961/posts_i86uog.json`
	);
	const posts = await res.json();
	posts.reverse();

	return {
		props: {
			posts,
		},
	};
}

const news = ({ posts }) => {
	useEffect(() => {
		document.body.classList.add('bg-bg');
		return () => {
			document.body.classList.remove('bg-bg');
		};
	}, []);

	return (
		<>
			<Nav />
			<Title>News</Title>
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
