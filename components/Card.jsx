import { useState } from 'react';
import { motion } from 'framer-motion';

const Card = () => {
	const [isHover, setIsHover] = useState(false);
	return (
		<div
			class='md:flex aspect-h-9 aspect-w-16 bg-gray-100 rounded-xl overflow-hidden'
			onMouseOver={() => setIsHover(true)}
			onMouseOut={() => setIsHover(false)}
		>
			<motion.img
				animate={
					isHover ? { scale: 1.1, rotate: 3, filter: 'brightness(0.7)' } : {}
				}
				transition={{ type: 'spring', stiffness: 150 }}
				class='absolute rounded-xl object-cover'
				src='/cover.jpg'
			/>
			<div class='p-6 text-left space-y-4'>
				<figcaption class='font-medium'>
					<div class='text-cyan-600'>Sarah Dayan</div>
					<div class='text-gray-500'>At 20/12/2020</div>
				</figcaption>
			</div>
		</div>
	);
};

export default Card;
