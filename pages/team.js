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
				<h2 className='text-3xl lg:text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8 text-black dark:text-white duration-300 ease-in-out'>
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
				<Separator />
			</div>

			<TeamSection
				name='HR Committee'
				leaders={[
					{ name: 'Eman Saleh', role: 'Director', img: '/teams/eman.png' },
					{
						name: 'Medhat Atef',
						role: 'Co Director',
						img: '/teams/medhat_atef.png',
					},
					{
						name: 'Reem Mohamed',
						role: 'Instructor',
						img: '/cover.jpg',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Public Relations Committee'
				leaders={[
					{
						name: 'Menna Ayman',
						role: 'Director',
						img: '/teams/menna_ayman.png',
					},
					{
						name: 'Mera Ayman',
						role: 'Co Director',
						img: '/teams/mera_ayman.png',
					},
					{
						name: 'Sara Ashraf',
						role: 'Co Director',
						img: '/teams/sara_ashraf.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='FundRasing Committee'
				leaders={[
					{
						name: 'Habiba',
						role: 'Director',
						img: '/teams/habiba.png',
					},
					{
						name: 'leqaa atef',
						role: 'Co Director',
						img: '/teams/leqaa_atef.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Social Media Committee'
				leaders={[
					{
						name: 'Menna Ibrahim',
						role: 'Director',
						img: '/teams/menna_ibrahim.png',
					},
					{
						name: 'Amany Essam',
						role: 'Co Director',
						img: '/teams/amany_essam.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Content Writing Committee'
				leaders={[
					{
						name: 'Shahd Adel',
						role: 'Director',
						img: '/teams/shahd_adel.png',
					},
					{
						name: 'Rawda',
						role: 'Co Director',
						img: '/teams/rawda.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Graphic Design Committee'
				leaders={[
					{
						name: 'Shahd Hitham',
						role: 'Supervisor',
						img: '/teams/shahd_hitham.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Video Editing Committee'
				leaders={[
					{
						name: 'Mohamed Gamal',
						role: 'Director',
						img: '/teams/mohamed_gamal.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Coaching Committee'
				leaders={[
					{
						name: 'Menna Mahmoud',
						role: 'Director',
						img: '/teams/menna_mahmoud.png',
					},
					{
						name: 'Ahmed Abdelhady',
						role: 'Co Director',
						img: '/teams/ahmed_abdelhady.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Organizing Committee'
				leaders={[
					{
						name: 'Renad Wael',
						role: 'Director',
						img: '/teams/renad_wael.png',
					},
					{
						name: 'Shaza Mohamed',
						role: 'Co Director',
						img: '/teams/shaza_mohamed.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Technical Support Committee'
				leaders={[
					{
						name: 'Devien George',
						role: 'Director',
						img: '/teams/devien_george.png',
					},
					{
						name: 'Gasser Abdelraziik',
						role: 'Co Director',
						img: '/teams/gasser.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>
			<Footer />
		</>
	);
};

export default teams;
