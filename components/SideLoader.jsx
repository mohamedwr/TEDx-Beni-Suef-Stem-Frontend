import { motion } from 'framer-motion';

const SideLoader = () => {
	const initial = { width: '100%' };
	const animate = { width: '0%' };
	let time = 1;

	const transitions = {
		duration: time,
		ease: 'easeInOut',
		type: 'tween',
	};

	return (
		<>
			<motion.div
				className="fixed h-full bg-gray-900 z-60"
				initial={initial}
				animate={animate}
				transition={{ ...transitions }}
			/>
			<motion.div
				className="fixed z-50 h-full bg-red-500"
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
