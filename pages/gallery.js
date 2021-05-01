import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

// Components
import Nav from '../components/Nav';
import Title from '../components/Title';
import Footer from '../components/Footer';

const gallery = () => {
	const [isOpen, setOpen] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const images = [
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755915/Gallery/photo_2021-04-11_14-37-20_jmxtz6.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755871/Gallery/photo_2021-04-11_14-37-17_kztaty.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755819/Gallery/photo_2021-04-11_14-37-14_x8licl.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755771/Gallery/photo_2021-04-11_14-37-10_eouj8y.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755726/Gallery/photo_2021-04-10_17-36-24_d80wrw.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755685/Gallery/photo_2021-04-10_17-36-22_zlefmr.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755645/Gallery/photo_2021-04-10_17-36-20_bpcnsc.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755610/Gallery/photo_2021-04-10_17-02-37_pyjmag.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755592/Gallery/photo_2021-04-10_17-02-33_ynt2hb.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755575/Gallery/photo_2021-04-10_17-02-31_ylxjpd.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755559/Gallery/photo_2021-04-10_16-27-44_ztwxgc.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755544/Gallery/photo_2021-04-10_16-27-26_pt426v.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755530/Gallery/photo_2021-04-10_16-27-12_nw1bpu.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755517/Gallery/photo_2021-04-10_04-11-26_arii3q.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755494/Gallery/photo_2021-04-10_04-11-25_fycnhe.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755472/Gallery/photo_2021-04-10_04-11-16_k7xfgq.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755452/Gallery/photo_2021-04-10_04-11-14_k0fxgn.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755434/Gallery/photo_2021-04-10_04-11-11_v6owet.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755423/Gallery/photo_2021-04-10_04-11-09_xiydpt.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755416/Gallery/photo_2021-04-10_04-11-07_g08yow.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755410/Gallery/photo_2021-04-10_04-11-05_ku2bd3.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755405/Gallery/photo_2021-04-10_04-11-04_n9onti.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755401/Gallery/photo_2021-04-10_04-11-03_gjzb5z.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755398/Gallery/photo_2021-04-10_04-11-01_gahyic.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755396/Gallery/photo_2021-04-10_04-10-58_fzbjaa.jpg',
		'https://res.cloudinary.com/dxaqlmgag/image/upload/v1618755396/Gallery/photo_2021-04-10_04-10-57_jrhxmf.jpg',
	];
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
						onClick={() => {
							setImageIndex(index);
							setOpen(true);
						}}
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
			{isOpen && (
				<Lightbox
					mainSrc={images[imageIndex]}
					nextSrc={images[(imageIndex + 1) % images.length]}
					prevSrc={images[(imageIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setOpen(false)}
					onMovePrevRequest={() =>
						setImageIndex((imageIndex + images.length - 1) % images.length)
					}
					onMoveNextRequest={() =>
						setImageIndex((imageIndex + 1) % images.length)
					}
				/>
			)}
			<Footer />
		</>
	);
};

export default gallery;
