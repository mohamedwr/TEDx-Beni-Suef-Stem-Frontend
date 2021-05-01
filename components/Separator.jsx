const Separator = ({ color = '', className = '' }) => (
	<hr
		className={`w-full h-1 ${
			color == '' ? 'bg-gray-200' : color
		} dark:bg-gray-600 rounded-md border-0 ${className}`}
	/>
);

export default Separator;
