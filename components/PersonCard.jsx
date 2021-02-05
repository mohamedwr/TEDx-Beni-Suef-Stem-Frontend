import 'keen-slider/keen-slider.min.css';

const PersonCard = ({ img, name, role }) => (
	<div className='keen-slider__slide inline-flex flex-col justify-center items-center'>
		<img
			src={img}
			alt={name}
			className='w-40 h-40 object-cover rounded-full mb-2'
		/>
		<div className='text-center'>
			<h3 className='font-roboto capitalize text-2xl font-bold'>{name}</h3>
			<h4 className='font-roboto text-gray-800 capitalize text-xl font-medium'>
				{role}
			</h4>
		</div>
	</div>
);

export default PersonCard;
