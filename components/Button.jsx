const FlatButton = ({ children, onClick }) => (
	<div
		className={`cursor-pointer capitalize py-3 px-8 text-lg font-medium text-center tracking-wide text-white duration-200 transition-colors ease-in-out rounded-full border-red-500 border-2 hover:bg-red-500 hover:text-white`}
		onClick={onClick}
	>
		{children}
	</div>
);

const FilledButton = ({ children, onClick }) => {
	return (
		<button
			className='px-8 py-3 text-lg font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 ease-in-out bg-red-500 rounded-full cursor-pointer hover:bg-red-600'
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export { FlatButton, FilledButton };
