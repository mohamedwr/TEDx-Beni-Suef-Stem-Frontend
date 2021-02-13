import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const SideLoader = () => {
	const { pathname } = useRouter();

	const initial = { width: '100%' };
	const animate = { width: '0%' };

	const transitions = {
		duration: 1,
		ease: 'easeInOut',
		type: 'tween',
	};

	return (
		<>
			<motion.div
				key={pathname}
				className='fixed bg-gray-900 z-60 h-full'
				initial={initial}
				animate={animate}
				transition={{ ...transitions }}
			/>
			<motion.div
				key={pathname}
				className='fixed bg-red-500 z-50 h-full'
				initial={initial}
				animate={animate}
				transition={{
					...transitions,
					delay: 0.4,
				}}
			/>
		</>
	);
};

export default SideLoader;
