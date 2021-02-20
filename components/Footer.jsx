import FooterLink from './FooterLink';
import Icon from './Icon';

const Footer = () => (
	<footer className='z-50 py-10 bg-black'>
		<div className='container flex flex-col items-center justify-center space-y-5'>
			<ul className='flex flex-col space-y-4 text-lg text-center select-none font-roboto md:flex-row md:space-y-0 md:space-x-8'>
				<FooterLink name='home' path='/' />
				<FooterLink name='news' path='/news' />
				<FooterLink name='about' path='/about' />
				<FooterLink name='our team' path='/team' />
				<FooterLink name='contacts us' path='/contact' />
			</ul>
			<ul className='flex space-x-4 select-none md:space-x-10'>
				<Icon
					img='/icons/facebook.png'
					url='https://www.facebook.com/TEDxBSTEM/'
				/>
				<Icon
					img='/icons/phone.png'
					url='https://api.whatsapp.com/send?phone=201555653764'
				/>
				<Icon img='/icons/email.png' url='mailto:tedxbstem@gmail.com' />
				<Icon
					img='/icons/youtube.png'
					url='https://www.youtube.com/channel/UCA-y2ItuAJGsWnlo1egpLtw'
				/>
			</ul>
			<form className='flex w-5/12'>
				<label className='w-full'>
					<input
						type='text'
						name='subject'
						className='block w-full duration-200 ease-in-out bg-gray-100 rounded-tl-xl rounded-bl-xl opacity-70 hover:opacity-100 focus:opacity-100'
						placeholder='Enter Your Email For Our Mailing Services..'
					/>
				</label>
				<button className='px-4 py-2 text-black duration-150 bg-gray-100 rounded-tr-xl rounded-br-xl hover:bg-gray-200'>
					Subscribe
				</button>
			</form>
			<h4 className='text-sm text-gray-400 md:text-base font-roboto'>
				© {new Date().getFullYear().toString()} All Rights Reserved |
				TEDxYouthBSTEM
			</h4>
		</div>
	</footer>
);

export default Footer;
