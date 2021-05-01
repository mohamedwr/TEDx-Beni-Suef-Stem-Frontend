import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

// Components
import PersonCard from '../components/PersonCard';
import Separator from '../components/Separator';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TeamSection from '../components/TeamSection';

export async function getServerSideProps(context) {
	const backend_url = process.env.BACKEND_URL;
	const { data: committees } = await axios.get(`${backend_url}/api/committee`);

	committees.shift();

	return {
		props: {
			committees,
		},
	};
}

const teams = ({ committees }) => {
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
							img='/leaders/Chairman.png'
							margin
						/>
					</div>

					<div className='flex flex-wrap items-center justify-center'>
						<PersonCard
							name='Ahmed Sayed'
							role='Co-Chairman'
							img='/leaders/Co-Chairman.png'
							margin
						/>
						<PersonCard
							name='Salma Ahmed'
							role='CEO'
							img='/leaders/CEO.png'
							margin
						/>
					</div>

					<div className='flex flex-wrap items-center justify-center'>
						<PersonCard
							name='Salma Ahmed'
							role='Multi-Media Chief'
							img='/leaders/Multi-Media.png'
							margin
						/>

						<PersonCard
							name='Mohamed Hisham'
							role='Digital-Marketing Chief'
							img='/leaders/Digital-Marketing-Chief.png'
							margin
						/>

						<PersonCard
							name='Karem Nabil'
							role='PR & FR Chief'
							img='/leaders/PR-&-FR.png'
							margin
						/>
					</div>
				</div>
			</section>

			{committees.map((committee) => (
				<Fragment key={committee.id}>
					<div className='container'>
						<Separator />
					</div>

					<TeamSection
						name={committee.title}
						leaders={committee.leaders}
						members={committee.members}
					/>
				</Fragment>
			))}

			<Footer />
		</>
	);
};

export default teams;
