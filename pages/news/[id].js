import { useRouter } from 'next/router';

// Components
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const postPage = () => {
	const router = useRouter();
	return (
		<>
			<Nav />
			<div className='container py-4 space-y-1 lg:px-20 lg:py-14 lg:space-y-3'>
				<h1 className='text-2xl font-black text-gray-800 lg:text-5xl font-roboto dark:text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
					quae?
				</h1>
				<div className='flex items-center justify-between space-x-2 text-gray-700 dark:text-white'>
					<h4>
						By <span className='font-medium'>Devien George</span>
					</h4>
					<h5>At 20/12/2020</h5>
				</div>
				<img
					src='/cover.jpg'
					alt='post image'
					className='shadow-lg rounded-xl aspect-h-4'
				/>
				<p className='text-justify text-gray-800 font-cairo text-md lg:text-xl lg:text-left dark:text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
					consectetur eius tempore esse voluptas ipsum possimus hic atque
					quaerat sapiente a illo repellat, nihil eaque inventore ut ex
					praesentium cumque nesciunt porro error. Laudantium aliquam natus
					repudiandae? Illum voluptatibus ipsam magni nulla voluptatum labore
					amet, suscipit voluptas harum ratione incidunt iste. Mollitia, ipsum
					officia cumque inventore non necessitatibus, expedita atque unde porro
					dicta molestias ducimus, dolorum aspernatur. Vitae pariatur inventore,
					corporis ex at laborum recusandae maiores ducimus dolorem fugiat,
					expedita eligendi officia cum quos voluptas id a, enim quibusdam
					veritatis! Nostrum odio vero non! Reprehenderit perspiciatis,
					voluptates illo ea dolore nostrum vel error, explicabo ad omnis unde
					temporibus deleniti facere. Quo ullam possimus excepturi deleniti
					vero, minus dolores commodi nobis.
				</p>
				<div className='flex flex-col items-center justify-center space-y-2'>
					<a
						className='flex items-center justify-center px-12 py-4 text-xl font-bold text-white uppercase duration-200 ease-in-out bg-blue-500 rounded-full shadow-md cursor-pointer font-roboto hover:bg-blue-600'
						href='https://www.facebook.com'
						target='_blank'
					>
						View In
						<img src='/icons/facebook.png' className='pl-2 h-7' alt='' />
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
