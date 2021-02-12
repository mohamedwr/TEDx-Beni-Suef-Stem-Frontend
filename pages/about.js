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
			<div className='flex h-screen justify-center items-center bg-aboutSm lg:bg-aboutLg bg-cover bg-no-repeat'>
				<h1 className='capitalize text-white font-roboto text-4xl md:text-5xl lg:text-7xl text-center font-bold duration-300 ease-in-out'>
					{/* "One day or day one, you decide" */}
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(
									'<span class="text-ted dark:text-red-500">One Day</span>'
								)
								.typeString('<span> I Will Achieve My Goal...</span>')
								.pauseFor(1000)
								.deleteAll()
								.typeString(
									"<span>It Is <span class='text-ted dark:text-red-500'>Day</span> Number <span class='text-ted'>One</span> Preparing For My Goal...</span>"
								)
								.pauseFor(1000)
								.deleteAll()
								.typeString(
									'<span><span class="text-ted dark:text-red-500">"One Day</span> or <span class="text-ted dark:text-red-500">Day One</span>, You Decide<span class="text-ted dark:text-red-500">"</span></span>'
								)
								.start();
						}}
					/>
				</h1>
			</div>
			<section className='flex justify-center items-center'>
				<div className='container py-12 grid grid-cols-1 lg:grid-cols-2 gap-14'>
					<div>
						<h2 className='text-4xl font-bold font-roboto pb-4 text-red-500'>
							About Us
						</h2>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-lg leading-relaxed border-l-8 rounded border-red-500 pl-4 text-justify md:text-left text-black dark:text-white duration-300 ease-in-out'>
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
							<p className='font-roboto text-lg leading-relaxed border-l-8 rounded border-red-500 pl-4 text-justify md:text-left text-black dark:text-white duration-300 ease-in-out'>
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
			<Footer />
		</>
	);
};

export default about;
