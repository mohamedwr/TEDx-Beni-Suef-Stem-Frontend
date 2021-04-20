// Components
import Nav from '../components/Nav';
import Section from '../components/Section';
import Timer from '../components/Timer';
import Title from '../components/Title';

const event = () => {
	return (
		<>
			<Nav />
			<Title>Event Details</Title>
			<section className='px-6 py-16 m-5 space-y-6 bg-pink-600 rounded-md shadow-lg'>
				<h1 className='text-4xl font-bold text-center text-white'>
					Event Date
				</h1>
				<Timer />
			</section>
			<div className='container py-5 space-y-24'>
				<Section withBorder title='Updates'>
					<h2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a
						recusandae doloremque saepe porro explicabo iste amet odio magni
						optio.
					</h2>
				</Section>
			</div>
		</>
	);
};

export default event;
