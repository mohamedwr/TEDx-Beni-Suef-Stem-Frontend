const RectangleCard = ({
	name = 'Habeba Yehia',
	role = 'Lorem ipsum dolor sit amet.',
}) => {
	return (
		<div className='flex flex-col justify-center px-3 py-4 duration-200 ease-in-out bg-gray-100 rounded-lg shadow-sm dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md'>
			<h2 className='text-lg font-bold text-black capitalize dark:text-white font-roboto'>
				{name}
			</h2>
			<p className='text-gray-700 capitalize dark:text-gray-50 font-roboto'>
				{role}
			</p>
		</div>
	);
};

export default RectangleCard;
