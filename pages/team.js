import { useState } from 'react';
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

	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		initial: 0,
		mode: 'free-snap',
		centered: true,
		loop: true,
		spacing: 15,
		// mobile
		breakpoints: {
			// tablet
			'(min-width: 768px)': {
				slidesPerView: 3,
			},
			// mini laptop
			'(min-width: 1200px)': {
				slidesPerView: 4,
			},
			// laptop
			'(min-width: 1600px)': {
				slidesPerView: 6,
			},
		},
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	};

	const [sliderRef1] = useKeenSlider(settings);
	const [sliderRef2] = useKeenSlider(settings);

	return (
		<>
			<Nav />
			<Title>Team</Title>
			<section className='container py-12'>
				<h2 className='text-3xl lg:text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8'>
					<span className='text-red-500 font-black'>
						TED<sup>x</sup>
					</span>{' '}
					Youth@BeniSuefSTEM Management Board
				</h2>
				<div className='flex flex-col space-y-6'>
					<div className='flex justify-center items-center'>
						<PersonCard
							name='Yussof Waleed'
							role='Chairman'
							img='/teams/leaders/Chairman.png'
						/>
					</div>

					<div className='flex justify-around items-center flex-wrap'>
						<PersonCard
							name='Ahmed Sayed'
							role='Co-Chairman'
							img='/teams/leaders/Co-Chairman.png'
						/>
						<PersonCard
							name='Salma Ahmed'
							role='CEO'
							img='/teams/leaders/CEO.png'
						/>
					</div>

					<div className='flex justify-around items-center flex-wrap'>
						<PersonCard
							name='Salma Ahmed'
							role='Multi-Media Chief'
							img='/teams/leaders/Multi-Media.png'
						/>

						<PersonCard
							name='Mohamed Hisham'
							role='Digital-Marketing Chief'
							img='/teams/leaders/Digital-Marketing-Chief.png'
						/>
						<PersonCard
							name='Karem Nabil'
							role='PR & FR Chief'
							img='/teams/leaders/PR-&-FR.png'
						/>
					</div>
				</div>
			</section>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<section className='container pt-8 pb-4'>
				<h2
					className={`text-3xl lg:text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8 text-ted`}
				>
					Human Resources Committee
				</h2>
				<div ref={sliderRef1} className='keen-slider cursor-move'>
					<PersonCard
						isSlid
						img='./cover.jpg'
						name='Eman Saleh'
						role='HR Director'
					/>
					<PersonCard
						isSlid
						img='./cover.jpg'
						name='Medhat Atef'
						role='HR Vice Director'
					/>
					<PersonCard
						isSlid
						img='./cover.jpg'
						name='Reem Mahmoud'
						role='HR Instructor'
					/>
				</div>
				<div ref={sliderRef2} className='keen-slider cursor-move'>
					{PRTeamPersons.map((person) => (
						<PersonCard
							isSlide
							key={person.name}
							img={person.img}
							name={person.name}
							role={person.role}
						/>
					))}
				</div>
			</section>
			<Footer />
		</>
	);
};

export default teams;
