import Nav from '../components/Nav';
import Card from '../components/Card';
import Footer from '../components/Footer';

const news = () => {
	return (
		<>
			<Nav />
			<div className='container py-5 md:px-52'>
				<div className='grid grid-cols-1 gap-5'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default news;
