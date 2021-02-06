import 'keen-slider/keen-slider.min.css';

const PersonCard = ({ img, name, role }) => (
	<div className='keen-slider__slide inline-flex flex-col justify-start items-center'>
		<div className='rounded-full bg-gray-400 duration-200 ease-in-out hover:bg-red-500'>
			<img
				src={img}
				alt={name}
				className='w-52 h-52 object-cover rounded-full'
			/>
		</div>
		<div className='text-center'>
			<h3 className='font-roboto capitalize text-2xl font-bold'>{name}</h3>
			<h4 className='font-roboto text-gray-800 capitalize text-xl font-medium'>
				{role}
			</h4>
		</div>
	</div>
);

export default PersonCard;
