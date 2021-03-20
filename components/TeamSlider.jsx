import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

// Components
import PersonCard from './PersonCard';

const ArrowLeft = (props) => {
	const disableId = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={'arrow arrow--left' + disableId}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
		>
			<path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
		</svg>
	);
};

const ArrowRight = (props) => {
	const disableId = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={'arrow arrow--right' + disableId}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
		>
			<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
		</svg>
	);
};

const TeamSlider = ({
	persons,
	arrows = false,
	dots = false,
	loop = false,
	center = false,
	md = 3,
	lg = 4,
	xl = 5,
	isMembers = false,
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
			<div ref={sliderRef} className='cursor-move keen-slider'>
				{persons.map((person) => (
					<PersonCard
						isSlide
						key={`${person.name}-${person.role}`}
						img={person.img}
						name={person.name}
						role={person.role}
						grayscale={grayscale}
						isMember={isMembers}
					/>
				))}
			</div>
			{slider && arrows && (
				<>
					<ArrowLeft
						onClick={(e) => e.stopPropagation() || slider.prev()}
						disabled={currentSlide === 0}
					/>
					<ArrowRight
						onClick={(e) => e.stopPropagation() || slider.next()}
						disabled={currentSlide === slider.details().size - 1}
					/>
				</>
			)}
			{slider && dots && (
				<div className='flex dots md:hidden'>
					{[...Array(slider.details().size).keys()].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									slider.moveToSlideRelative(idx);
								}}
								className={'dot' + (currentSlide === idx ? ' active' : '')}
							/>
						);
					})}
				</div>
			)}
		</>
	);
};

// persons Schema
// { name: "Ahmed mohamed", title: "CEO", img: "https://localhost:3000/img.jpg" }

export default TeamSlider;
