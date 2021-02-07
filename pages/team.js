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
