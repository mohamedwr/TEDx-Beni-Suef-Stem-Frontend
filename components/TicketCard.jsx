import { useRouter } from 'next/router';

// Components
import Separator from './Separator';
import { FilledButton } from './Button';

const TicketCard = ({
	name = 'Ticket',
	price = 150,
	benefits = [
		'Lorem, ipsum dolor.',
		'Lorem, ipsum dolor.',
		'Lorem, ipsum dolor.',
	],
	form = '/error',
}) => {
	const router = useRouter();
	return (
		<div className='flex flex-col py-10 space-y-5 text-center bg-gray-100 border-2 rounded-md shadow-md px-7 xl:px-20 dark:bg-gray-700 dark:border-red-500'>
			<h2 className='text-5xl font-bold uppercase dark:text-white'>{name}</h2>
			<Separator color='dark:bg-red-500' className='bg-gray-300' />
			<h4 className='text-4xl font-bold dark:text-white'>
				{price} <span className='text-xl font-normal'>EGP</span>
			</h4>
			<div className='flex flex-col space-y-3'>
				{benefits.map((benefit, index) => (
					<h3
						key={`${index}-${benefit}`}
						className='text-xl font-medium text-gray-500 dark:text-white'
					>
						{benefit}
					</h3>
				))}
			</div>
			<FilledButton onClick={() => router.push(form)}>
				Book Your Ticket
			</FilledButton>
		</div>
	);
};
export default TicketCard;
