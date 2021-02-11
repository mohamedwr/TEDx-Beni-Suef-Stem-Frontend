import { useState } from 'react';
import TeamSlider from './TeamSlider';

const TeamSection = ({ name, leaders, members }) => {
	const [visible, setVisible] = useState(false);
	// const PRTeamPersons = [
	// 	{ name: 'ahmed mohamed', role: 'CEO', img: '/cover.jpg' },
	// 	{ name: 'khaled mohamed', role: 'Head of WB', img: '/cover.jpg' },
	// 	{ name: 'george mohamed', role: 'CEO', img: '/cover.jpg' },
	// ];

	return (
		<section className='container pt-8 pb-4'>
			<div className='flex justify-between items-center mb-8'>
				<h2
					className={`text-3xl lg:text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 text-ted dark:text-red-500`}
				>
					{name}
				</h2>
				<button
					className={`py-2 px-6 font-roboto font-black border-2 border-ted dark:border-red-500 ${
						!visible
							? 'bg-ted dark:bg-red-500 text-white dark:text-gray-800'
							: 'bg-transparent text-ted dark:text-red-500'
					} text-lg font-bold uppercase rounded-full`}
					onClick={() => setVisible((prev) => !prev)}
				>
					{!visible ? 'View Members' : 'Hide Members'}
				</button>
			</div>
			<TeamSlider
				persons={leaders}
				md={1}
				lg={Math.min(leaders.length, 3)}
				xl={Math.min(leaders.length, 3)}
			/>
			<br />
			{visible ? <TeamSlider persons={members} grayscale /> : undefined}
		</section>
	);
};

export default TeamSection;
