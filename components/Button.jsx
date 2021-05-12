const defaultClasses =
	'cursor-pointer capitalize py-3 px-8 text-lg font-medium text-center tracking-wide text-white duration-200 transition-colors ease-in-out rounded-full';

const Button = ({ children, type = 'flat', onClick, className }) => {
	let buttonStyle;

	switch (type) {
		case 'flat':
			buttonStyle =
				defaultClasses +
				'border-red-500 border-2 hover:bg-red-500 hover:text-white';
			break;

		case 'filled':
			buttonStyle =
				defaultClasses +
				'bg-red-500 rounded-full cursor-pointer hover:bg-red-600';
			break;

		default:
			console.log('error');
			break;
	}
	return (
		<div className={`${buttonStyle} ${className}`} onClick={onClick}>
			{children}
		</div>
	);
};

export default Button;
