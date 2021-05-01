// Components
import Nav from '../components/Nav';
import Section from '../components/Section';
import Timer from '../components/Timer';
import Title from '../components/Title';
import PersonCard from '../components/PersonCard';
import Footer from '../components/Footer';
import TicketCard from '../components/TicketCard';
// import { FilledButton } from '../components/Button';
// import Separator from '../components/Separator';

const event = () => {
	const tickets = [
		{
			name: 'Normal',
			price: 120,
			form: 'https://forms.gle/K5ycFiAq9CRpYpg68',
			benefits: [
				'Attendance & Breakfast',
				'Normal Welcome Package',
				'Normal Sticker Package',
				'Face Mask',
				'-',
				'-',
				'-',
			],
		},
		{
			name: 'Pro',
			price: 150,
			form: 'https://forms.gle/wqgY9f4EsQyURy5H9',
			benefits: [
				'Attendance & Breakfast',
				'Pro Welcome Package',
				'Pro Sticker Package',
				'Face Mask',
				'Printed T-Shirt',
				'Pro Seat',
				'-',
			],
		},
		{
			name: 'VIP',
			price: 180,
			form: 'https://forms.gle/uS2jDJYTsfQ5X7k49 ',
			benefits: [
				'Attendance & Breakfast',
				'VIP Welcome Package',
				'Full Sticker Package',
				'Face Mask',
				'Printed T-Shirt',
				'VIP Seat',
				'Lunch',
			],
		},
	];
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

				{/* <section className='flex flex-col justify-around space-y-2 md:flex-row md:space-y-0'>
					<FilledButton>Volunteer</FilledButton>
					<FilledButton>Book Your Ticket</FilledButton>
					<FilledButton>Event On Facebook</FilledButton>
				</section> */}

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

				{/* Tickets */}
				<Section
					title='Tickets'
					withBorder
					className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
				>
					{tickets.map(({ name, price, form, benefits }) => (
						<TicketCard
							// name={`${name} Ticket`}
							name={name}
							price={price}
							form={form}
							benefits={benefits}
						/>
					))}
				</Section>

				{/* Partners & Sponsors */}
				{/* <Section
					withBorder
					title='Partners & Sponsors'
					className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
				>
					{[1, 2, 3, 4, 5, 6].map((card) => (
						<PersonCard
							key={card}
							isMember
							img='/cover.jpg'
							name={`Person ${card}`}
						/>
					))}
				</Section> */}

				{/* Speakers */}
				<Section
					withBorder
					title='Speakers'
					// className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
				>
					{/* {[1, 2, 3, 4, 5, 6].map((card) => (
						<PersonCard
							key={card}
							isMember
							img='/cover.jpg'
							name={`Speaker ${card}`}
						/>
					))} */}
					<h2 className='py-5 text-5xl font-bold text-center text-gray-600'>
						SOON
					</h2>
				</Section>
			</div>
			<Footer />
		</>
	);
};

export default event;
