import Icon from './Icon';

const Footer = () => (
	<footer className='py-10 bg-gray-800'>
		<div className='container flex flex-col items-center justify-center space-y-5'>
			<ul className='font-roboto select-none text-center flex flex-col md:flex-row md:space-x-8 text-lg'>
				<li className='capitalize text-gray-100 duration-150 cursor-pointer font-bold hover:text-red-500'>
					home
				</li>
				<li className='capitalize text-gray-100 duration-150 cursor-pointer font-bold hover:text-red-500'>
					our team
				</li>
				<li className='capitalize text-gray-100 duration-150 cursor-pointer font-bold hover:text-red-500'>
					vision & mission
				</li>
				<li className='capitalize text-gray-100 duration-150 cursor-pointer font-bold hover:text-red-500'>
					contact us
				</li>
			</ul>
			<ul className='flex space-x-4 md:space-x-10 select-none'>
				<Icon img='/facebook.svg' url='https://www.facebook.com/TEDxBSTEM/' />
				<Icon
					img='/phone.svg'
					url='https://api.whatsapp.com/send?phone=201119210940'
				/>
				<Icon img='/email.svg' url='mailto:yussofwaleed@gmail.com' />
				<Icon img='/youtube.svg' url='' />
			</ul>
			<h4 className='text-gray-400 text-sm md:text-base font-roboto'>
				© {new Date().getFullYear().toString()} All Rights Reserved |
				TEDxYouthBSTEM
			</h4>
		</div>
	</footer>
);

export default Footer;
