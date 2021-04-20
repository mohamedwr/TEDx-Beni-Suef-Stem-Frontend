import Nav from '../components/Nav';
import Title from '../components/Title';
import Footer from '../components/Footer';

const gallery = () => {
	const images = [
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755396/Gallery/photo_2021-04-10_04-10-57_jrhxmf.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755410/Gallery/photo_2021-04-10_04-11-05_ku2bd3.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755405/Gallery/photo_2021-04-10_04-11-04_n9onti.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755401/Gallery/photo_2021-04-10_04-11-03_gjzb5z.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755423/Gallery/photo_2021-04-10_04-11-09_xiydpt.jpg',
	];
	// const rowsNumber = images / 2;
	return (
		<>
			<Nav />
			<Title>Gallery</Title>

			<h1 className='pt-5 text-5xl font-bold text-center text-red-500 md:text-7xl'>
				Outing Day
			</h1>
			<section className='container grid grid-cols-3 gap-2 py-5 md:gap-5'>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`image ${index + 1}`}
						className={`object-cover w-full h-full ${
							Math.floor((index + 1) / 2) % 2 == 1 ? 'col-span-1' : 'col-span-2'
						} rounded-lg shadow-xl`}
						style={
							Math.floor((index + 1) / 2) % 2 == 0
								? {
										aspectRatio: '16 / 9',
								  }
								: {}
						}
					/>
				))}
			</section>
			<Footer />
		</>
	);
};

export default gallery;
