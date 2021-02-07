import faker from 'faker';
import { useKeenSlider } from 'keen-slider/react';

// Components
import PersonCard from '../components/PersonCard';
import Separator from '../components/Separator';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TeamSlider from '../components/TeamSlider';

const teams = () => {
	const PRTeamPersons = [
		{ name: 'ahmed mohamed', role: 'CEO', img: '/cover.jpg' },
		{ name: 'khaled mohamed', role: 'Head of WB', img: '/cover.jpg' },
		{ name: 'george mohamed', role: 'CEO', img: '/cover.jpg' },
		{ name: 'John mohamed', role: 'CEO', img: '/cover.jpg' },
		{ name: 'safwt mohamed', role: 'Head HR', img: '/cover.jpg' },
		{ name: 'elon mask', role: 'CEO', img: '/cover.jpg' },
	];

	return (
		<>
			<Nav />
			<Title>Team</Title>
			{/* <section className='container py-12'>
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
			</section> */}
			<TeamSlider name='PR Team' persons={PRTeamPersons} />
			<div className='container'>
				<Separator color='bg-red-500' />
			</div>
			<TeamSlider name='HR Team' persons={PRTeamPersons} />
			<div className='container'>
				<Separator color='bg-red-500' />
			</div>
			<TeamSlider name='FR Team' persons={PRTeamPersons} />
			<div className='container'>
				<Separator color='bg-red-500' />
			</div>
			<Footer />
		</>
	);
};

export default teams;
