const Separator = ({
	color = 'bg-gray-200',
	darkColor = 'dark:bg-gray-600',
}) => {
	let dark = `dark:${darkColor}`;
	return <hr className={`w-full h-1 ${color} ${dark} rounded-md border-0`} />;
};

export default Separator;
