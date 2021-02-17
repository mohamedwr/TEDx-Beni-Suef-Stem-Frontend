import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Card = () => {
	const [isHover, setIsHover] = useState(false);
	const router = useRouter();
	return (
		<div
			className='relative overflow-hidden bg-gray-100 select-none md:flex aspect-h-9 aspect-w-16 rounded-xl'
			onMouseOver={() => setIsHover(true)}
			onMouseOut={() => setIsHover(false)}
		>
			<motion.img
				animate={isHover ? { scale: 1.15, filter: 'brightness(0.7)' } : {}}
				transition={{ type: 'tween' }}
				className='absolute object-cover border-red-500 rounded-xl border-l-16'
				src='/cover.jpg'
			/>
			<div className='p-6 space-y-4 text-left'>
				<figcaption className='font-medium text-white'>
					<h2 className='pb-1 font-bold text-md lg:text-3xl lg:pb-4'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
						et.
					</h2>
					<h3 className='text-sm lg:text-lg'>By Devien George</h3>
					<p className='text-sm text-gray-200 lg:text-lg'>At 20/12/2020</p>
				</figcaption>
			</div>
			<motion.div
				className='absolute flex items-center justify-center h-full bg-red-500-alpha'
				animate={
					isHover ? { width: '100%', opacity: 1 } : { width: '0%', opacity: 0 }
				}
				transition={{ type: 'keyframes', easings: 'easeInOut' }}
				onClick={() => router.push('/news/55')}
			>
				<button className='px-8 py-4 text-xl font-bold text-white uppercase rounded-full shadow-md font-roboto bg-ted'>
					View Post
				</button>
			</motion.div>
		</div>
	);
};

export default Card;
