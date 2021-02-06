const Icon = ({ img, url = '#' }) => (
	<li className=''>
		<a
			className='grayscale h-11 w-11 md:h-12 md:w-12 block cursor-pointer transform duration-200 ease-in-out hover:scale-110'
			href={url}
		>
			<img src={img} alt='icon' />
		</a>
	</li>
);

export default Icon;
