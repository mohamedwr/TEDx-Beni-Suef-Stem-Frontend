const Tile = ({ text, value }) => (
	<>
		<h4 className='text-4xl text-white capitalize md:text-6xl lg:text-8xl xl:text-9xl'>
			{value}
		</h4>
		<h5 className='text-4xl text-white capitalize md:text-5xl lg:text-6xl xl:text-6xl'>
			{text}
		</h5>
	</>
);

const Timer = () => (
	<ul className='grid grid-cols-2 gap-8 xl:grid-cols-4 xl:gap-x-6'>
		<li className='flex flex-col items-center text-white'>
			<Tile text='weeks' value='05' />
		</li>
		<li className='flex flex-col items-center text-white'>
			<Tile text='days' value='05' />
		</li>
		<li className='flex flex-col items-center text-white'>
			<Tile text='hour' value='05' />
		</li>
		<li className='flex flex-col items-center text-white'>
			<Tile text='minutes' value='05' />
		</li>
	</ul>
);

export default Timer;
