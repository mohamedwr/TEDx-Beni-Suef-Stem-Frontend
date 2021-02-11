import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

// Components
import PersonCard from './PersonCard';
import RightArrow from '../public/right-arrow.svg';
import LeftArrow from '../public/left-arrow.svg';

const TeamSlider = ({
	persons,
	arrows = false,
	loop = false,
	center = false,
	md = 3,
	lg = 4,
	xl = 5,
	grayscale = false,
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		initial: 0,
		mode: 'free-snap',
		centered: center,
		loop: loop,
		spacing: 15,
		// mobile
		breakpoints: {
			// tablet sm - md
			'(min-width: 768px)': {
				slidesPerView: md,
			},
			// mini laptop lg - xl
			'(min-width: 1200px)': {
				slidesPerView: lg,
			},
			// laptop 2xl
			'(min-width: 1600px)': {
				slidesPerView: xl,
			},
		},
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	};

	const [sliderRef, slider] = useKeenSlider(settings);

	return (
		<>
			<div ref={sliderRef} className='keen-slider cursor-move'>
				{persons.map((person) => (
					<PersonCard
						isSlide
						key={person.name}
						img={person.img}
						name={person.name}
						role={person.role}
						grayscale={grayscale}
					/>
				))}
			</div>
			{slider && arrows && (
				<div className='flex justify-between lg:justify-end items-center space-x-5 mt-5 px-8'>
					<LeftArrow
						onClick={(e) => e.stopPropagation() || slider.prev()}
						className={`fill-current 
						${
							currentSlide === 0
								? 'text-gray-400 border-gray-400 hover:text-white hover:bg-gray-400 cursor-not-allowed'
								: 'text-red-500 border-red-500 hover:text-white hover:bg-red-500 cursor-pointer'
						} 
						h-16 p-3 rounded-full border-2 duration-300 ease-in-out`}
					/>
					<RightArrow
						onClick={(e) => e.stopPropagation() || slider.next()}
						className={`fill-current 
						${
							currentSlide === slider.details().size - 1
								? 'text-gray-400 border-gray-400 hover:text-white hover:bg-gray-400 cursor-not-allowed'
								: 'text-red-500 border-red-500 hover:text-white hover:bg-red-500 cursor-pointer'
						} 
						h-16 p-3 rounded-full border-2 duration-300 ease-in-out`}
					/>
				</div>
			)}
		</>
	);
};

// persons Schema
// { name: "Ahmed mohamed", title: "CEO", img: "https://localhost:3000/img.jpg" }

export default TeamSlider;
