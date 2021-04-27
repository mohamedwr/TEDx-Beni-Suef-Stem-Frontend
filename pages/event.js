// Components
import Nav from '../components/Nav';
import Section from '../components/Section';
import { FilledButton } from '../components/Button';
import Timer from '../components/Timer';
import Title from '../components/Title';
import Separator from '../components/Separator';
import PersonCard from '../components/PersonCard';
import Footer from '../components/Footer';

const event = () => {
	return (
		<>
			<Nav />
			<Title>Event Details</Title>
			<div className='container py-5 space-y-6'>
				<section className='px-6 pb-16 space-y-4 bg-red-500 rounded-md shadow-lg pt-11'>
					<h1 className='text-4xl font-bold text-center text-white'>
						Event Date
					</h1>
					<Timer />
				</section>

				{/* <Separator color='bg-red-500' /> */}

				<section className='flex flex-col justify-around space-y-2 md:flex-row md:space-y-0'>
					<FilledButton>Volunteer</FilledButton>
					<FilledButton>Book Your Ticket</FilledButton>
					<FilledButton>Event On Facebook</FilledButton>
				</section>

				<Separator color='bg-red-500' />

				<Section withBorder title='Event Description'>
					<p className='font-light text-black dark:text-white'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
						corrupti autem natus illo, harum quam suscipit molestiae voluptates
						omnis reprehenderit deserunt aperiam sit doloremque itaque neque qui
						architecto placeat explicabo quos dolore aliquam nisi.
						Necessitatibus natus earum assumenda expedita voluptate. Inventore
						numquam expedita quibusdam dignissimos esse similique sequi modi
						enim, et cum qui dolor corporis dolorem sapiente nam facilis
						suscipit nihil ipsam facere illo aliquid. Aliquam quae quam
						praesentium ipsam expedita asperiores doloremque molestias nisi
						provident veritatis voluptate cupiditate doloribus voluptas sint
						quod, ea adipisci in error vel, perspiciatis iure ipsa distinctio.
						Id placeat sapiente repudiandae, iure sequi quod consequatur sit
						pariatur deleniti inventore quae illo expedita earum obcaecati
						voluptatum eum minus velit ratione eius iusto, dolor provident fugit
						excepturi.
					</p>
				</Section>

				<Separator color='bg-red-500' />

				<Section
					withBorder
					title='Partners'
					className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
				>
					{[1, 2, 3, 4, 5, 6].map((card) => (
						<PersonCard
							key={card}
							isMember
							img='/cover.jpg'
							name={`Partner ${card}`}
						/>
					))}
				</Section>

				<Separator color='bg-red-500' />

				<Section
					withBorder
					title='Sponsors'
					className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
				>
					{[1, 2, 3, 4, 5, 6].map((card) => (
						<PersonCard
							key={card}
							isMember
							img='/cover.jpg'
							name={`Sponsor ${card}`}
						/>
					))}
				</Section>
			</div>
			<Footer />
		</>
	);
};

export default event;
