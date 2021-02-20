// Components
import PersonCard from '../components/PersonCard';
import Separator from '../components/Separator';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TeamSection from '../components/TeamSection';

const teams = () => {
	return (
		<>
			<Nav />
			<Title>Team</Title>
			<section className='container py-12'>
				<h2 className='pl-4 mb-8 text-3xl font-bold text-black duration-300 ease-in-out border-l-8 border-red-500 rounded lg:text-4xl font-roboto dark:text-white'>
					<span className='font-black text-red-500'>
						TED<sup>x</sup>
					</span>{' '}
					Youth@BeniSuefSTEM Management Board
				</h2>
				<div className='flex flex-col space-y-6'>
					<div className='flex items-center justify-center'>
						<PersonCard
							name='Yussof Waleed'
							role='Chairman'
							img='/teams/leaders/Chairman.png'
							margin
						/>
					</div>

					<div className='flex flex-wrap items-center justify-center'>
						<PersonCard
							name='Ahmed Sayed'
							role='Co-Chairman'
							img='/teams/leaders/Co-Chairman.png'
							margin
						/>
						<PersonCard
							name='Salma Ahmed'
							role='CEO'
							img='/teams/leaders/CEO.png'
							margin
						/>
					</div>

					<div className='flex flex-wrap items-center justify-center'>
						<PersonCard
							name='Salma Ahmed'
							role='Multi-Media Chief'
							img='/teams/leaders/Multi-Media.png'
							margin
						/>

						<PersonCard
							name='Mohamed Hisham'
							role='Digital-Marketing Chief'
							img='/teams/leaders/Digital-Marketing-Chief.png'
							margin
						/>

						<PersonCard
							name='Karem Nabil'
							role='PR & FR Chief'
							img='/teams/leaders/PR-&-FR.png'
							margin
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
						img: '/teams/reem_mohamed.png',
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
