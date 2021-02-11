import { useState } from 'react';
import faker from 'faker';
import { useKeenSlider } from 'keen-slider/react';

// Components
import PersonCard from '../components/PersonCard';
import Separator from '../components/Separator';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TeamSection from '../components/TeamSection';

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
				<h2 className='text-3xl lg:text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8 text-black dark:text-white'>
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

					<div className='flex justify-evenly items-center flex-wrap'>
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

					<div className='flex justify-evenly items-center flex-wrap'>
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

			<TeamSection
				name='HR Committee'
				leaders={[
					{ name: 'Eman Saleh', role: 'HR Director', img: '/teams/eman.png' },
					{
						name: 'Medhat Atef',
						role: 'HR Co Director',
						img: '/teams/medhat_atef.png',
					},
					{
						name: 'Reem Mohamed',
						role: 'HR Instructor',
						img: '/cover.jpg',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Public Relations Committee'
				leaders={[
					{
						name: 'Menna Ayman',
						role: 'PR Director',
						img: '/teams/menna_ayman.png',
					},
					{
						name: 'Mera Ayman',
						role: 'PR Co Director',
						img: '/teams/mera_ayman.png',
					},
					{
						name: 'Sara Ashraf',
						role: 'PR Co Director',
						img: '/teams/sara_ashraf.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='FoundRasing Committee'
				leaders={[
					{
						name: 'Habiba',
						role: 'FR Director',
						img: '/teams/habiba.png',
					},
					{
						name: 'leqaa',
						role: 'FR Co Director',
						img: '/cover.jpg',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Social Media Committee'
				leaders={[
					{
						name: 'Menna Ibrahim',
						role: 'SM Director',
						img: '/cover.jpg',
					},
					{
						name: 'Amany Essam',
						role: 'SM Co Director',
						img: '/teams/amany_essam.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Content Writing Committee'
				leaders={[
					{
						name: 'Shahd Adel',
						role: 'CW Director',
						img: '/teams/shahd_adel.png',
					},
					{
						name: 'Rawda',
						role: 'CW Co Director',
						img: '/teams/rawda.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Graphic Design Committee'
				leaders={[
					{
						name: 'Shahd Hitham',
						role: 'GD Supervisor',
						img: '/cover.jpg',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Video Editing Committee'
				leaders={[
					{
						name: 'Mohamed Gamal',
						role: 'VE Director',
						img: '/teams/mohamed_gamal.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Couching Committee'
				leaders={[
					{
						name: 'Menna Mahmoud',
						role: 'Couching Director',
						img: '/teams/menna_mahmoud.png',
					},
					{
						name: 'Ahmed Abdelhady',
						role: 'Couching Co Director',
						img: '/teams/ahmed_abdelhady.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Organizing Committee'
				leaders={[
					{
						name: 'Renad Wael',
						role: 'Organizing Director',
						img: '/teams/renad_wael.png',
					},
					{
						name: 'Shaza Mohamed',
						role: 'Organizing Co Director',
						img: '/teams/shaza_mohamed.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator color='bg-red-500' />
			</div>

			<TeamSection
				name='Technical Support Committee'
				leaders={[
					{
						name: 'Devien George',
						role: 'TS Director',
						img: '/teams/devien_george.png',
					},
					{
						name: 'gassar',
						role: 'TS Co Director',
						img: '/teams/gasser.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'HR Member', img: '/cover.jpg' },
				]}
			/>
			<Footer />
		</>
	);
};

export default teams;
