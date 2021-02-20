import { useEffect, useState } from 'react';
import TeamSlider from './TeamSlider';
import { AnimatePresence, motion } from 'framer-motion';

const TeamSection = ({ name, leaders = [], members = [] }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (visible == true) {
			setTimeout(() => {
				setVisible(false);
			}, 1500000);
		}
		return () => {
			clearTimeout();
		};
	}, [visible]);

	return (
		<section className='container pt-8 pb-4'>
			<div className='flex flex-col mb-8 space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0'>
				<h2
					className={`text-3xl lg:text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 text-ted dark:text-red-500`}
				>
					{name}
				</h2>
				{members.length > 0 && (
					<button
						className={`py-2 px-6 font-roboto font-black border-2 border-ted dark:border-red-500 ${
							!visible
								? 'bg-ted dark:bg-red-500 text-white dark:text-gray-800'
								: 'bg-transparent text-ted dark:text-red-500'
						} text-lg font-bold uppercase rounded-lg md:rounded-full`}
						onClick={() => setVisible((prev) => !prev)}
					>
						{!visible ? 'View Members' : 'Hide Members'}
					</button>
				)}
			</div>
			<TeamSlider
				persons={leaders}
				md={1}
				lg={Math.min(leaders.length, 3)}
				xl={Math.min(leaders.length, 3)}
				dots
			/>
			{members.length > 0 && (
				<>
					<br />
					<AnimatePresence>
						{visible && (
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0 }}
								transition={{ duration: 0.5 }}
								className='relative origin-top'
							>
								<TeamSlider persons={members} grayscale arrows isMembers />
							</motion.div>
						)}
					</AnimatePresence>
				</>
			)}
		</section>
	);
};

export default TeamSection;
