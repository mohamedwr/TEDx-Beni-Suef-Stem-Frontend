import { useState } from 'react';
import { motion } from 'framer-motion';

const Card = () => {
	const [isHover, setIsHover] = useState(false);
	return (
		<div
			class='md:flex aspect-h-9 aspect-w-16 bg-gray-100 rounded-xl overflow-hidden relative'
			onMouseOver={() => setIsHover(true)}
			onMouseOut={() => setIsHover(false)}
		>
			<motion.img
				animate={isHover ? { scale: 1.15, filter: 'brightness(0.7)' } : {}}
				transition={{ type: 'spring', stiffness: 150 }}
				class='absolute rounded-xl object-cover border-l-16 border-red-500'
				src='/cover.jpg'
			/>
			<div class='p-6 text-left space-y-4'>
				<figcaption class='font-medium text-white'>
					<h2 className='text-3xl pb-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
						et.
					</h2>
					<h3 class='text-lg'>By Devien George</h3>
					<p class='text-gray-200'>At 20/12/2020</p>
				</figcaption>
			</div>
			<motion.div
				className='absolute flex justify-center items-center h-full bg-red-500-alpha'
				animate={
					isHover ? { width: '100%', opacity: 1 } : { width: '0%', opacity: 0 }
				}
			>
				<button className='py-3 px-2 font-roboto bg-red-500 text-white text-xl font-bold uppercase rounded-full'>
					View Post
				</button>
			</motion.div>
		</div>
	);
};

export default Card;
