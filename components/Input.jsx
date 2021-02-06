const Input = ({ label, type, placeholder }) => (
	<>
		<label className='block'>
			<span className='text-gray-700'>{label}</span>
			<input
				type={type}
				className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
				placeholder={placeholder}
			/>
		</label>
	</>
);

export default Input;
