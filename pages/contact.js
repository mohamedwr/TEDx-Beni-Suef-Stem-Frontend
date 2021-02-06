import { useEffect } from 'react';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Particle from '../components/Particle';

const contact = () => {
	useEffect(() => {
		document.body.style.backgroundColor = '#353b48';
	}, []);
	return (
		<>
			<Nav />
			<Title>Contact Us</Title>
			<section className='flex justify-center items-center z-20'>
				<Particle />
				<div className='container py-10 space-y-5'>
					<h2 className='text-4xl font-bold font-roboto pb-4 capitalize text-center text-white'>
						contact us
					</h2>
					<div className='flex items-center justify-center'>
						<div className='w-11/12 lg:w-1/3'>
							<div className='grid grid-cols-1 gap-6'>
								{/* Start Form */}
								<label className='block'>
									<span className='text-white'>Full Name</span>
									<input
										type='text'
										className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
										placeholder='John Doe'
									/>
								</label>
								<label className='block'>
									<span className='text-white'>Email address</span>
									<input
										type='email'
										className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
										placeholder='john@example.com'
									/>
								</label>
								<label className='block'>
									<span className='text-white'>Subject</span>
									<input
										type='email'
										className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
										placeholder='Hello There'
									/>
								</label>
								<label className='block'>
									<span className='text-white'>Message</span>
									<textarea
										className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 resize-none'
										rows='6'
										placeholder='Enter Message...'
									></textarea>
								</label>
								<button
									type='submit'
									className='py-3 px-2 bg-blue-500 text-white font-roboto text-lg rounded-md ring-4 hover'
								>
									Submit
								</button>
								{/* End Form */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default contact;
