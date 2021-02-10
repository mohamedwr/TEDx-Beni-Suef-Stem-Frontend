import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import XLetter from '../public/x.svg';

const PersonCard = ({ img, name, role, isSlide }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className={`${
				isSlide ? 'keen-slider__slide' : ''
			} inline-flex flex-col justify-start items-center`}
		>
			<div
				className='rounded-full bg-ted duration-200 ease-in-out hover:bg-black mb-4 relative overflow-hidden border border-black'
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<div className='flex justify-center items-center absolute inset-0'>
					<XLetter
						className={`h-60 z-0 duration-500 ease-in-out opacity-100 ${
							hover ? '' : 'transform rotate-180 translate-x-56 opacity-0'
						}`}
					/>
				</div>
				<img
					src={img}
					alt={name}
					className='w-44 h-44 lg:h-52 lg:w-52 object-cover rounded-full relative z-20'
				/>
			</div>

			<div className='text-center'>
				<h3 className='font-roboto capitalize text-xl lg:text-2xl font-bold'>
					{name}
				</h3>
				<h4 className='font-roboto text-gray-800 capitalize text-lg lg:text-xl font-medium'>
					{role}
				</h4>
			</div>
		</div>
	);
};

export default PersonCard;
