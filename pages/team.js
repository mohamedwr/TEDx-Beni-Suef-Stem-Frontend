import faker from 'faker';
import { useKeenSlider } from 'keen-slider/react';

// Components
import PersonCard from '../components/PersonCard';
import Separator from '../components/Separator';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';

const teams = () => {
	const settings = {
		mode: 'free',
		spacing: 15,
		// mobile
		slidesPerView: 2,
		breakpoints: {
			// tablet
			'(min-width: 768px)': {
				slidesPerView: 3,
			},
			// mini laptop
			'(min-width: 1200px)': {
				slidesPerView: 5,
			},
			// laptop
			'(min-width: 1600px)': {
				slidesPerView: 6,
			},
		},
	};
	const [CHTeamRef] = useKeenSlider(settings);
	const [HRTeamRef] = useKeenSlider(settings);
	const [PRTeamRef] = useKeenSlider(settings);
	const [TSTeamRef] = useKeenSlider(settings);
	const [VETeamRef] = useKeenSlider(settings);

	return (
		<>
			<Nav />
			<Title>Team</Title>
			<section className='container py-12'>
				<h2 className='text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8'>
					PR Team
				</h2>
				<div ref={PRTeamRef} className='keen-slider cursor-move'>
					{[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((index) => (
						<PersonCard
							key={index}
							img='/cover.jpg'
							name={`${faker.name.firstName()} ${faker.name.lastName()}`}
							role={faker.name.jobTitle()}
						/>
					))}
				</div>
			</section>
			<div className='container'>
				<Separator color='bg-red-500' />
			</div>
			<Footer />
		</>
	);
};

export default teams;
