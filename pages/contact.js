import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Particles from 'react-tsparticles';

const contact = () => {
	return (
		<>
			<Nav />
			<section className='flex justify-center items-center z-20'>
				<Particles
					id='tsparticles'
					className='absolute inset-0 -z-10'
					options={{
						background: {
							color: {
								value: 'transparent',
							},
						},
						fpsLimit: 60,
						interactivity: {
							detectsOn: 'canvas',
							modes: {
								bubble: {
									distance: 400,
									duration: 2,
									opacity: 0.8,
									size: 40,
								},
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
							},
						},
						particles: {
							color: {
								value: '#e74c3c',
							},
							links: {
								color: '#000',
								distance: 100,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							collisions: {
								enable: true,
							},
							move: {
								direction: 'none',
								enable: true,
								outMode: 'bounce',
								random: false,
								speed: 6,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									value_area: 800,
								},
								value: 80,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: ['image', 'circle'],
								image: [
									{
										src: '/x.svg',
										height: 30,
										width: 30,
									},
								],
							},
							size: {
								value: 10,
								random: false,
								anim: {
									enable: true,
									speed: 4,
									size_min: 10,
									sync: false,
								},
							},
						},
						detectRetina: true,
					}}
				/>
				<div className='container py-10 space-y-5'>
					<h2 className='text-4xl font-bold font-roboto pb-4 capitalize text-center'>
						contact us
					</h2>
					<div className='flex items-center justify-center'>
						<div className='w-11/12 lg:w-1/3'>
							<div className='grid grid-cols-1 gap-6'>
								<label className='block'>
									<span className='text-gray-700'>Full Name</span>
									<input
										type='text'
										className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
										placeholder='John Doe'
									/>
								</label>
								<label className='block'>
									<span className='text-gray-700'>Email address</span>
									<input
										type='email'
										className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
										placeholder='john@example.com'
									/>
								</label>
								<label className='block'>
									<span className='text-gray-700'>Subject</span>
									<input
										type='email'
										className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
										placeholder='Hello There'
									/>
								</label>
								<label className='block'>
									<span className='text-gray-700'>Message</span>
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
