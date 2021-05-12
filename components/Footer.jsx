const Footer = () => (
	<footer className="z-50 py-10 bg-black">
		<div className="container flex flex-col items-center justify-center space-y-5">
			<ul className="flex flex-col space-y-4 text-lg text-center select-none font-roboto md:flex-row md:space-y-0 md:space-x-8">
				<FooterLink name="home" path="/" />
				<FooterLink name="news" path="/news" />
				<FooterLink name="about" path="/about" />
				<FooterLink name="our team" path="/team" />
				<FooterLink name="gallery" path="/gallery" />
				<FooterLink name="contacts us" path="/contact" />
				<FooterLink name="event" path="/event" />
			</ul>
			<ul className="flex space-x-4 select-none md:space-x-10">
				<Icon
					img="/icons/facebook.png"
					url="https://www.facebook.com/TEDxBSTEM/"
				/>
				<Icon
					img="/icons/phone.png"
					url="https://api.whatsapp.com/send?phone=201555653764"
				/>
				<Icon img="/icons/email.png" url="mailto:tedxbstem@gmail.com" />
				<Icon
					img="/icons/youtube.png"
					url="https://www.youtube.com/channel/UCA-y2ItuAJGsWnlo1egpLtw"
				/>
			</ul>
			<MailingForm />
			<h4 className="text-sm text-center text-gray-400 md:text-base font-roboto">

				© {new Date().getFullYear().toString()} All Rights Reserved |
				TEDxYouth@BeniSuefSTEM
			</h4>
		</div>
	</footer>
);

export default Footer;
