import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const postPage = () => {
	return (
		<>
			<Nav />
			<div className='container lg:px-20 py-4 lg:py-14 space-y-1 lg:space-y-3'>
				<h1 className='text-2xl lg:text-5xl font-black font-roboto'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
					quae?
				</h1>
				<div className='flex justify-between items-center space-x-2'>
					<h4>
						By <span className='font-medium'>Devien George</span>
					</h4>
					<h5>At 20/12/2020</h5>
				</div>
				<img
					src='/cover.jpg'
					alt='post image'
					className='rounded-xl aspect-h-4 shadow-lg'
				/>
				<p className='text-md lg:text-xl text-justify lg:text-left'>
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
			</div>
			<Footer />
		</>
	);
};

export default postPage;
