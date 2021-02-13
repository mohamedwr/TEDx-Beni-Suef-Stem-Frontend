import { createRef, useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';
import { useWindowScroll } from 'react-use';

const CircularCard = ({ title, num, color = 'bg-red-500' }) => {
	const { y } = useWindowScroll();
	const [started, setStarted] = useState(false);
	const divRef = createRef();
	const [top, setTop] = useState(3000);

	useEffect(() => {
		setTop(
			divRef.current.getBoundingClientRect().top -
				divRef.current.getBoundingClientRect().height
		);
	}, []);

	useEffect(() => {
		if (top <= y && !started) {
			start();
			setStarted(true);
		}
	}, [y]);

	const { countUp, start } = useCountUp({
		start: 0,
		end: num,
		duration: 3,
		delay: 3000,
		useEasing: true,
	});

	return (
		<div
			ref={divRef}
			className={`h-64 w-64 ${color} rounded-full border-4 border-ted flex flex-col justify-center items-center font-bold font-roboto`}
		>
			<span className='text-7xl dark:text-white'>{countUp}</span>
			<h3 className='text-2xl uppercase text-red-500'>{title}</h3>
		</div>
	);
};

export default CircularCard;
