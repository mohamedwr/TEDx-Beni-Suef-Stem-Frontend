const Input = ({ label, type, placeholder }) => (
	<>
		<label className='block'>
			<span className='text-gray-700'>{label}</span>
			<input
				type={type}
				className='block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
				placeholder={placeholder}
			/>
		</label>
	</>
);

export default Input;
