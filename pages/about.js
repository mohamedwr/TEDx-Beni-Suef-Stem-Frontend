import { useKeenSlider } from 'keen-slider/react';
import Typewriter from 'typewriter-effect';
import axios from 'axios';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Separator from '../components/Separator';
import Word from '../components/Word';
import PersonCard from '../components/PersonCard';
import Title from '../components/Title';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import Section from '../components/Section';
import RectangleCard from '../components/RectangleCard';

export async function getServerSideProps(context) {
	const backend_url = process.env.BACKEND_URL;
	const { data: thanks } = await axios.get(`${backend_url}/api/thank`);

	return {
		props: {
			thanks,
		},
	};
}

const about = ({ thanks }) => {
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
			<Nav fixed autoTransparent />
			<Title>About Us</Title>
			<div className="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-aboutSm lg:bg-aboutLg">
				<h1 className="text-4xl font-bold text-center text-white capitalize duration-300 ease-in-out font-roboto md:text-5xl lg:text-7xl">
					{/* "One day or day one, you decide" */}
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(
									'<span class="text-ted">One Day</span>'
								)
								.typeString(
									'<span> I Will Achieve My Goal...</span>'
								)
								.pauseFor(1000)
								.deleteAll()
								.typeString(
									"<span>It Is <span class='text-ted'>Day</span> Number <span class='text-ted'>One</span> Preparing For My Goal...</span>"
								)
								.pauseFor(1000)
								.deleteAll()
								.typeString(
									'<span><span class="text-ted">"One Day</span> or <span class="text-ted">Day One</span>, You Decide<span class="text-ted">"</span></span>'
								)
								.start();
						}}
					/>
				</h1>
			</div>
			<section className="flex items-center justify-center">
				<div className="container grid grid-cols-1 py-12 lg:grid-cols-2 gap-14">
					<Section title="About Us">
						<div className="flex flex-col lg:flex-row">
							<p className="pl-4 text-lg leading-relaxed text-justify text-black duration-300 ease-in-out border-l-8 border-red-500 rounded font-cairo md:text-left dark:text-white">
								“IDEAS WORTH SPREADING”, under this slogan,
								TEDxYouth@BeniSuefSTEM has arisen as a nonprofit
								organization. It holds events where Technology,
								Entertainment, Design, science, business, and
								global issues converge. Hence, we set up a
								community of curious souls to spread various
								thoughts through our local event with shined
								speakers who have meaningful messages and aspire
								to put their unique fingerprints. Thus, our
								mission as a TEDx distributor in BS STEM School
								is to spread TED's valuable aims in BeniSuef,
								exposing insights, beliefs, and inspirations.
								They can rise with us. It makes the subtle ideas
								soar in the sky of our society because we have
								the faith in every thought which was rejected
								before. And we spot the light on; the intrinsic
								ideas deserve the opportunity to raise in our
								community, turning from being rejected to
								respected because they are "IDEAS WORTH
								SPREADING".
							</p>
						</div>
					</Section>

					<Section title="Mission & Vision">
						<div className="flex flex-col lg:flex-row">
							<p className="pl-4 text-lg leading-relaxed text-justify text-black duration-300 ease-in-out border-l-8 border-red-500 rounded font-cairo md:text-left dark:text-white">
								<Word>Mission:</Word> To spread knowledge and
								outstanding ideas through organizing our
								TEDxYouth@BeniSuefSTEM event, in which our
								speakers will cover discipline topics, and share
								their stories from the deeps of struggling to
								the massive success. Moreover, to widen the
								youth horizons and establish the principle of
								self-learning through introducing live examples,
								solutions, and the way of applying them to our
								community.
								<br />
								<br />
								<Word>Vision:</Word> TEDxYouth@BeniSuefSTEM aims
								to spot the light on the idea and the concept of
								overcoming the tough times and convert them into
								a huge success. In addition, spread and discuss
								the ideas of our local STEM community, which
								includes hundreds of students with bright minds.
								We plan to spread practical steps for success,
								to rise with our people, community, and our
								lovely country, Egypt.
							</p>
						</div>
					</Section>
				</div>
			</section>
			<div className="container pb-12">
				<Section title="Special Thanks">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{thanks.map((thank) => (
							<RectangleCard
								key={thank.id}
								name={thank.name}
								content={thank.content}
							/>
						))}
					</div>
				</Section>
			</div>
			<Footer />
		</>
	);
};

export default about;
