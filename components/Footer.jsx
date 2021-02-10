import FooterLink from './FooterLink';
import Icon from './Icon';

const Footer = () => (
	<footer className='py-10 bg-black z-50'>
		<div className='container flex flex-col items-center justify-center space-y-5'>
			<ul className='font-roboto select-none text-center flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg'>
				<FooterLink name='home' path='/' />
				<FooterLink name='vision & mission' path='about' />
				<FooterLink name='our team' path='team' />
				<FooterLink name='contacts us' path='contact' />
			</ul>
			<ul className='flex space-x-4 md:space-x-10 select-none'>
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
			<h4 className='text-gray-400 text-sm md:text-base font-roboto'>
				© {new Date().getFullYear().toString()} All Rights Reserved |
				TEDxYouthBSTEM
			</h4>
		</div>
	</footer>
);

export default Footer;
