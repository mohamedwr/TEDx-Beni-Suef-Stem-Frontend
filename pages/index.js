import { useKeenSlider } from 'keen-slider/react';
import { useContext } from 'react';

// Components
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Section from '../components/Section';
import Separator from '../components/Separator';
import Slider from '../components/Slider';
import TeamSlider from '../components/TeamSlider';
import Title from '../components/Title';
import Word from '../components/Word';

// Layout Context
import { LayoutContext } from '../context/LayoutContext';

export default function Home() {
	const { dark } = useContext(LayoutContext);

	return (
		<>
			<Nav fixed autoTransparent />
			<Title>Home</Title>

			<Slider
				images={[
					'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
					'/cover.jpg',
				]}
			/>
			<section className='flex justify-center items-center'>
				<div className='container py-12 space-y-10'>
					<Section title='About TEDx'>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-xl leading-relaxed h-full lg:w-3/4 border-l-8 rounded border-red-500 pl-4 text-black dark:text-white duration-300 ease-in-out'>
								<Word>TEDx</Word> is a grassroots initiative, created in the
								spirit of TED’s overall mission to research and discover{' '}
								<Word>“Ideas Worth Spreading”</Word>. TEDx brings the spirit of
								TED to local communities around the globe through TEDx events.
								These events are organized by passionate individuals who seek to
								uncover new ideas and to share the latest research in their
								local areas that spark conversations in their communities. TEDx
								events include live speakers and recorded TED Talks, and are
								organized independently under a free license granted by TED.
								These events are not controlled by TED, but event organizers
								agree to abide by our format, and are offered guidelines for
								curation, speaker coaching, event organizing and more. They
								learn from us and from each other. More than 3000 events are now
								held annually.{' '}
								<Word link='https://www.ted.com/about/programs-initiatives/tedx-program'>
									Read More About TEDx
								</Word>
							</p>
							<div className='lg:w-1/4 flex justify-center items-center'>
								<img
									src={dark ? '/aboutTedBlack.png' : '/aboutTedWhite.png'}
									className='md:w-8/12 lg:w-full'
								/>
							</div>
						</div>
					</Section>

					<Separator color='bg-red-500' />

					<Section title='About Us'>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-xl leading-relaxed h-full lg:w-3/4 border-l-8 rounded border-red-500 pl-4 text-black dark:text-white duration-300 ease-in-out'>
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
							<div className='lg:w-1/4 flex justify-center items-center'>
								<img
									src={dark ? '/tedLogoBlack.png' : '/tedLogoWhite.png'}
									className='w-8/12'
								/>
							</div>
						</div>
					</Section>

					<Separator color='bg-red-500' />

					<Section
						title='TEDx Youth@BeniSuefSTEM Management Board'
						biggerMargin
					>
						<TeamSlider
							loop
							center
							name=''
							color='text-red-500'
							persons={[
								{
									name: 'Yussof Waleed',
									role: 'Chairman',
									img: '/teams/leaders/Chairman.png',
								},
								{
									name: 'Ahmed Sayed',
									role: 'Co-Chairman',
									img: '/teams/leaders/Co-Chairman.png',
								},
								{
									name: 'Salma Ahmed',
									role: 'CEO',
									img: '/teams/leaders/CEO.png',
								},
								{
									name: 'Salma Ahmed',
									role: 'Multi-Media Chief',
									img: '/teams/leaders/Multi-Media.png',
								},
								{
									name: 'Mohamed Hisham',
									role: 'Digital-Marketing Chief',
									img: '/teams/leaders/Digital-Marketing-Chief.png',
								},
								{
									name: 'Karem Nabil',
									role: 'PR & FR Chief',
									img: '/teams/leaders/PR-&-FR.png',
								},
							]}
						/>
					</Section>
				</div>
			</section>

			<Footer />
		</>
	);
}
