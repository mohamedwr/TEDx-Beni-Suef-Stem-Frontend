import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const MailingForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const sendEmail = (email) => {
		axios
			.post('/api/mailing', { email })
			.then(() => {
				Swal.fire(
					'SuccessFull',
					'Form Has Been Submit. We Will Mail You',
					'success'
				);
			})
			.catch(() => {
				Swal.fire('Failed', 'Please Submit Your Form Again', 'error');
			});
	};

	const handleClick = async () => {
		await Swal.fire({
			title: 'Join More Than 3000 Followers',
			input: 'email',
			inputLabel: 'To Get Updated With Our News, Events, Offers, and Updates.',
			inputPlaceholder: 'Enter Your E-mail Address',
			preConfirm: (email) => {
				sendEmail(email);
			},
		});
	};

	return (
		<button
			onClick={() => handleClick()}
			className='px-10 py-2 text-lg font-bold text-black duration-150 bg-gray-100 rounded-full hover:bg-gray-200'
		>
			Join Us
		</button>
	);
};

export default MailingForm;
