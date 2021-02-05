const Button = ({ text, span }) => (
	<div
		className={`cursor-pointer capitalize py-3 px-8 text-lg font-medium text-center tracking-wide text-white duration-300 transition-colors ease-in-out rounded-full border-red-500 border-2 hover:bg-red-500 hover:text-white ${span}`}
	>
		{text}
	</div>
);

export default Button;
