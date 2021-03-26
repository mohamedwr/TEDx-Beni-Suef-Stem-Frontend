import { useRouter } from 'next/router';
// import ReactMarkdown from 'react-markdown';
import axios from 'axios';

// Components
import Nav from '../../components/Nav';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import { Remark } from 'react-remark';

export async function getServerSideProps({ query }) {
	const backend_url = process.env.BACKEND_URL;
	const { data: post } = await axios.get(`${backend_url}/api/post/${query.id}`);

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
	axios;

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
					<h5>At {post.created_at}</h5>
				</div>
				<img
					src={post.image}
					alt={post.title}
					className='w-full shadow-lg rounded-xl aspect-h-4'
				/>
				<div className='flex items-center justify-center'>
					<article className='pt-3 font-cairo dark:children:text-gray-100 space-y-4'>
						<Remark
							remarkParseOptions={{ commonmark: true }}
							remarkToRehypeOptions={{ commonmark: true }}
							rehypeReactOptions={{
								components: {
									a: (props) => (
										<a
											className='underline px-0 py-2 text-xl text-red-500 font-bold uppercase duration-200 ease-in-out cursor-pointer font-roboto'
											target='_blank'
											{...props}
										/>
									),
									h1: (props) => (
										<h1
											className='text-6xl text-black dark:text-white'
											{...props}
										/>
									),
									h2: (props) => (
										<h2
											className='text-5xl text-black dark:text-white'
											{...props}
										/>
									),
									h3: (props) => (
										<h3
											className='text-3xl text-black dark:text-white'
											{...props}
										/>
									),
									h4: (props) => (
										<h4
											className='text-2xl text-black dark:text-white'
											{...props}
										/>
									),
									h5: (props) => (
										<h5
											className='text-xl text-black dark:text-white'
											{...props}
										/>
									),
									h6: (props) => (
										<h6
											className='text-lg text-black dark:text-white'
											{...props}
										/>
									),
									p: (props) => (
										<h6
											className='text-lg text-black dark:text-white'
											{...props}
										/>
									),
								},
							}}
						>
							{post.content}
						</Remark>
					</article>
				</div>

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
