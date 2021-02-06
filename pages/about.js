import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Separator from '../components/Separator';
import Word from '../components/Word';
import PersonCard from '../components/PersonCard';
import Title from '../components/Title';

const about = () => {
	const [sliderRef1] = useKeenSlider({
		mode: 'free',
		spacing: 15,

		// mobile
		slidesPerView: 2,
		breakpoints: {
			// tablet
			'(min-width: 768px)': {
				slidesPerView: 3,
			},
			// mini laptop
			'(min-width: 1200px)': {
				slidesPerView: 5,
			},
			// laptop
			'(min-width: 1600px)': {
				slidesPerView: 6,
			},
		},
	});

	return (
		<>
			<Nav />
			<Title>About Us</Title>
			<section className='flex justify-center items-center'>
				<div className='container py-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div>
						<h2 className='text-4xl font-bold font-roboto pb-4'>About Us</h2>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-lg leading-relaxed border-l-8 rounded border-red-500 pl-4'>
								A peep at some distant orb has power to raise and purify our
								thoughts like a strain of sacred music, or a noble picture, or a
								passage from the grander poets. It always does one good. A peep
								at some distant orb has power to raise and purify our thoughts
								like a strain of sacred music, or a noble picture, or a passage
								from the grander poets. It always does one good. A peep at some
								distant orb has power to raise and purify our thoughts like a
								strain of sacred music, or a noble picture, or a passage from
								the grander poets. It always does one good. A peep at some
								distant orb has power to raise and purify our thoughts like a
								strain of sacred music, or a noble picture, or a passage from
								the grander poets. It always does one good.
							</p>
						</div>
					</div>
					<div>
						<h2 className='text-4xl font-bold font-roboto pb-4'>
							Mission & Vision
						</h2>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-lg leading-relaxed border-l-8 rounded border-red-500 pl-4'>
								<Word>Mission:</Word> To spread knowledge and outstanding ideas
								through organizing our TEDxYouth@BeniSuefSTEM event, in which
								our speakers will cover discipline topics, and share their
								stories from the deeps of struggling to the massive success.
								Moreover, to widen the youth horizons and establish the
								principle of self-learning through introducing live examples,
								solutions, and the way of applying them to our community.
								<br />
								<Word>Vision:</Word> TEDxYouth@BeniSuefSTEM aims to spot the
								light on the idea and the concept of overcoming the tough times
								and convert them into a huge success. In addition, spread and
								discuss the ideas of our local STEM community, which includes
								hundreds of students with bright minds. We plan to spread
								practical steps for success, to rise with our people, community,
								and our lovely country, Egypt.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='container'>
				<Separator color='bg-red-500' />
			</div>
			<section className='container py-12'>
				<h2 className='text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8'>
					TedX BeniSuefSTEM Leaders
				</h2>
				<div ref={sliderRef1} className='keen-slider cursor-move'>
					<PersonCard name='Yussof Waleed' role='Chairman' img='/person0.png' />
					<PersonCard
						name='Ahmed Sayed'
						role='Co-Chairman'
						img='/person1.png'
					/>
					<PersonCard name='Salma Ahmed' role='CEO' img='/person2.png' />
					<PersonCard
						name='Salma Ahmed'
						role='Multi-Media Chef'
						img='/person4.png'
					/>
					<PersonCard
						name='Mohamed Hisham'
						role='Digital-Marketing Chef'
						img='/person3.png'
					/>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default about;
