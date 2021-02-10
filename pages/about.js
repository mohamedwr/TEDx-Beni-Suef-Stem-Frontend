import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Typewriter from 'typewriter-effect';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Separator from '../components/Separator';
import Word from '../components/Word';
import PersonCard from '../components/PersonCard';
import Title from '../components/Title';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const about = () => {
	const router = useRouter();
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
			<Nav fixed />
			<Title>About Us</Title>
			<div className='flex h-screen justify-center items-center'>
				<h1 className='capitalize text-black font-roboto text-4xl md:text-5xl lg:text-7xl text-center font-bold'>
					{/* "One day or day one, you decide" */}
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('<span class="text-ted">One Day</span>')
								.typeString('<span> I Will Achieve My Goal...</span>')
								.pauseFor(1000)
								.deleteAll()
								.typeString(
									"<span>It's <span class='text-ted'>Day</span> Number <span class='text-ted'>One</span> Preparing For My Goal...</span>"
								)
								.pauseFor(1000)
								.deleteAll()
								.typeString(
									'<span class="text-ted">"One Day</span><span> or </span><span class="text-ted">Day One</span><span>, You Decide</span><span class="text-ted">"</span>'
								)
								.start();
						}}
					/>
				</h1>
			</div>
			<section className='flex justify-center items-center'>
				<div className='container py-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div>
						<h2 className='text-4xl font-bold font-roboto pb-4 text-red-500'>
							About Us
						</h2>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-lg leading-relaxed border-l-8 rounded border-red-500 pl-4 text-justify md:text-left'>
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
						<h2 className='text-4xl font-bold font-roboto pb-4 text-red-500'>
							Mission & Vision
						</h2>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-lg leading-relaxed border-l-8 rounded border-red-500 pl-4 text-justify md:text-left'>
								<Word>Mission:</Word> To spread knowledge and outstanding ideas
								through organizing our TEDxYouth@BeniSuefSTEM event, in which
								our speakers will cover discipline topics, and share their
								stories from the deeps of struggling to the massive success.
								Moreover, to widen the youth horizons and establish the
								principle of self-learning through introducing live examples,
								solutions, and the way of applying them to our community.
								<br />
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
			{/* <div className='container'>
				<Separator color='bg-red-500' />
			</div>
			<section className='container py-12'>
				<h2 className='text-3xl lg:text-4xl font-bold font-roboto border-l-8 rounded border-red-500 pl-4 mb-8'>
					<span className='text-red-500 font-black'>
						TED<sup>x</sup>
					</span>{' '}
					Youth@BeniSuefSTEM Management Board
				</h2>
				<div className='flex flex-col space-y-6'>
					<div className='flex justify-center items-center'>
						<PersonCard
							name='Yussof Waleed'
							role='Chairman'
							img='/teams/leaders/Chairman.png'
						/>
					</div>

					<div className='flex justify-center items-center md:space-x-10 space-x-2 flex-wrap'>
						<PersonCard
							name='Ahmed Sayed'
							role='Co-Chairman'
							img='/teams/leaders/Co-Chairman.png'
						/>
						<PersonCard
							name='Salma Ahmed'
							role='CEO'
							img='/teams/leaders/CEO.png'
						/>
					</div>

					<div className='flex justify-center items-center md:space-x-10 space-2 flex-wrap'>
						<PersonCard
							name='Salma Ahmed'
							role='Multi-Media Chief'
							img='/teams/leaders/Multi-Media.png'
						/>

						<PersonCard
							name='Mohamed Hisham'
							role='Digital-Marketing Chief'
							img='/teams/leaders/Digital-Marketing-Chief.png'
						/>
						<PersonCard
							name='Karem Nabil'
							role='PR & FR Chief'
							img='/teams/leaders/PR-&-FR.png'
						/>
					</div>
					<div className='flex justify-center items-center'>
						<button
							className='py-4 px-10 bg-transparent hover:bg-red-500 duration-300 ease-in-out text-red-500 hover:text-white font-roboto text-xl font-bold capitalize rounded-full border-4 border-red-500'
							onClick={() => router.push('/team')}
						>
							rest of our team
						</button>
					</div>
				</div>
			</section> */}

			<Footer />
		</>
	);
};

export default about;
