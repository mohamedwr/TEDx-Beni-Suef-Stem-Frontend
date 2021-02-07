import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

// Components
import PersonCard from './PersonCard';
import RightArrow from '../public/right-arrow.svg';
import LeftArrow from '../public/left-arrow.svg';

const TeamSlider = ({ name, persons, arrows = true }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		initial: 0,
		mode: 'free',
		spacing: 15,
		// mobile
		breakpoints: {
			// tablet
			'(min-width: 768px)': {
				slidesPerView: 3,
			},
			// mini laptop
			'(min-width: 1200px)': {
				slidesPerView: 5,
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

	// Autoplay function
	// useEffect(() => {
	// 	setInterval(() => {
	// 		slider.next();
	// 	}, 2500);
	// 	return () => {
	// 		clearInterval();
	// 	};
	// }, []);

	const [sliderRef, slider] = useKeenSlider(settings);

	return (
		<section className='container pt-8 pb-4'>
			<h2 className='text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8'>
				{name}
			</h2>
			<div ref={sliderRef} className='keen-slider cursor-move'>
				{persons.map((person) => (
					<PersonCard
						key={person.name}
						img={person.img}
						name={person.name}
						role={person.role}
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
		</section>
	);
};

// persons Schema
// { name: "Ahmed mohamed", title: "CEO", img: "https://localhost:3000/img.jpg" }

export default TeamSlider;
