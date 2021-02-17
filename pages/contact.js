import { useEffect } from 'react';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Particle from '../components/Particle';

const contact = () => {
	useEffect(() => {
		document.body.classList.remove('dark:bg-gray-800');
		document.body.classList.add('bg-black');
		return () => {
			document.body.classList.remove('bg-black');
			document.body.classList.add('dark:bg-gray-800');
		};
	}, []);
	return (
		<>
			<Nav />
			<Title>Contact Us</Title>
			<section className='z-20 flex items-center justify-center'>
				<Particle />
				<div className='container py-10 space-y-5'>
					<h2 className='pb-4 text-4xl font-bold text-center text-white uppercase font-roboto'>
						contact us
					</h2>
					<div className='flex items-center justify-center '>
						<div className='w-11/12 lg:w-1/3'>
							<div className='grid grid-cols-1 gap-6'>
								{/* Start Form */}
								<label className='block'>
									<span className='text-white'>Full Name</span>
									<input
										type='text'
										className='block w-full mt-1 duration-200 ease-in-out bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 opacity-70 hover:opacity-100 focus:opacity-100'
										placeholder='John Doe'
									/>
								</label>
								<label className='block'>
									<span className='text-white'>Email Address</span>
									<input
										type='email'
										className='block w-full mt-1 duration-200 ease-in-out bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 opacity-70 hover:opacity-100 focus:opacity-100'
										placeholder='john@example.com'
									/>
								</label>
								<label className='block'>
									<span className='text-white'>Subject</span>
									<input
										type='email'
										className='block w-full mt-1 duration-200 ease-in-out bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 opacity-70 hover:opacity-100 focus:opacity-100'
										placeholder='Hello There'
									/>
								</label>
								<label className='block'>
									<span className='text-white'>Message</span>
									<textarea
										className='block w-full mt-1 duration-200 ease-in-out bg-gray-100 border-transparent rounded-md resize-none focus:border-gray-500 focus:bg-white focus:ring-0 opacity-70 hover:opacity-100 focus:opacity-100'
										rows='6'
										placeholder='Enter Message...'
									></textarea>
								</label>
								<button
									type='submit'
									className='px-2 py-3 text-xl font-bold text-white uppercase bg-red-500 rounded-full font-roboto'
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
