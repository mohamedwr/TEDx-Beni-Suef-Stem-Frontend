import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

// Components
import Nav from '../../components/Nav';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

export async function getServerSideProps({ query }) {
	const res = await fetch(
		`https://res.cloudinary.com/dxaqlmgag/raw/upload/v1613863296/posts_lljihp.json`
	);
	const data = await res.json();

	const post = data.find((el) => el.id == query.id);

	return {
		props: {
			post,
		},
	};
}

const postPage = ({ post }) => {
	const router = useRouter();
	const id = router.query.id;
	console.log(id);

	return (
		<>
			<Nav />
			<Title>{post.title}</Title>
			<div className='container py-4 space-y-1 lg:px-20 lg:py-14 lg:space-y-3'>
				<h1 className='text-2xl font-black text-gray-800 lg:text-5xl font-roboto dark:text-white'>
					{post.title}
				</h1>
				<div className='flex items-center justify-between space-x-2 text-gray-700 dark:text-white'>
					<h4>
						By <span className='font-medium'>{post.author}</span>
					</h4>
					<h5>At {post.createdAt}</h5>
				</div>
				<img
					src={post.img}
					alt={post.title}
					className='w-full shadow-lg rounded-xl aspect-h-4'
				/>
				{/* <p className='text-justify text-gray-800 font-cairo text-md lg:text-xl lg:text-left dark:text-white'>
					{post.content}
				</p> */}

				<ReactMarkdown className='pt-3 prose prose-lg font-cairo'>
					{post.content}
				</ReactMarkdown>

				<div className='flex flex-col items-center justify-center space-y-2'>
					<a
						className='flex items-center justify-center px-12 py-4 text-xl font-bold text-white uppercase duration-200 ease-in-out bg-blue-500 rounded-full shadow-md cursor-pointer font-roboto hover:bg-blue-600'
						href={post.facebookPost}
						target='_blank'
					>
						View In
						<img
							src='/icons/facebook.png'
							className='pl-2 h-7'
							alt='facebook logo button'
						/>
					</a>
					<button
						className='px-12 py-4 text-xl font-bold text-white uppercase duration-200 ease-in-out bg-red-500 rounded-full shadow-md cursor-pointer font-roboto hover:bg-red-600'
						onClick={() => router.push('/news')}
					>
						Back
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default postPage;
