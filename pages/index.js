import { useContext } from 'react';
import { useRouter } from 'next/router';

// Components
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Section from '../components/Section';
import Separator from '../components/Separator';
import Slider from '../components/Slider';
import TeamSlider from '../components/TeamSlider';
import Title from '../components/Title';
import Word from '../components/Word';
import CircularCard from '../components/CircularCard';

// Layout Context
import { LayoutContext } from '../context/LayoutContext';

export default function Home() {
	const { dark } = useContext(LayoutContext);
	const router = useRouter();

	return (
		<>
			<Nav fixed autoTransparent />
			<Title>Home</Title>

			<Slider
				images={[
					'https://res.cloudinary.com/dxaqlmgag/image/upload/v1617782209/Slider/2_riiqk5.png',
					'https://res.cloudinary.com/dxaqlmgag/image/upload/v1617782209/Slider/1_t2ocns.png',
					'https://res.cloudinary.com/dxaqlmgag/image/upload/v1617782211/Slider/3_mgyliw.png',
					'https://res.cloudinary.com/dxaqlmgag/image/upload/v1617782214/Slider/4_hy3ghx.png',
				]}
			/>
			<section className='flex items-center justify-center'>
				<div className='container py-12 space-y-10'>
					<Section title='About TEDx'>
						<div className='flex flex-col lg:flex-row'>
							<p className='h-full pl-4 text-xl leading-relaxed text-black duration-300 ease-in-out border-l-8 border-red-500 rounded font-cairo lg:w-3/4 dark:text-white'>
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
							<div className='flex items-center justify-center pt-8 lg:w-1/4 md:pt-1'>
								<img
									src={dark ? '/aboutTedBlack.png' : '/aboutTedWhite.png'}
									className='md:w-8/12 lg:w-full'
								/>
							</div>
						</div>
					</Section>

					<Separator />

					<Section title='About Us'>
						<div className='flex flex-col lg:flex-row'>
							<p className='h-full pl-4 text-xl leading-relaxed text-black duration-300 ease-in-out border-l-8 border-red-500 rounded font-cairo lg:w-3/4 dark:text-white'>
								“IDEAS WORTH SPREADING”, under this slogan,
								TEDxYouth@BeniSuefSTEM has arisen as a nonprofit organization.
								It holds events where Technology, Entertainment, Design,
								science, business, and global issues converge. Hence, we set up
								a community of curious souls to spread various thoughts through
								our local event with shined speakers who have meaningful
								messages and aspire to put their unique fingerprints. Thus, our
								mission as a TEDx distributor in BS STEM School is to spread
								TED's valuable aims in BeniSuef, exposing insights, beliefs, and
								inspirations. They can rise with us. It makes the subtle ideas
								soar in the sky of our society because we have the faith in
								every thought which was rejected before. And we spot the light
								on; the intrinsic ideas deserve the opportunity to raise in our
								community, turning from being rejected to respected because they
								are "IDEAS WORTH SPREADING".
							</p>
							<div className='flex items-center justify-center lg:w-1/4'>
								<img
									src={dark ? '/tedLogoBlack.png' : '/tedLogoWhite.png'}
									className='w-8/12'
								/>
							</div>
						</div>
					</Section>

					<Separator />

					<section className='grid grid-cols-1 gap-4 py-6 md:grid-cols-2'>
						<div className='flex items-center justify-center space-x-5'>
							<CircularCard title='crew' num={135} color='bg-transparent' />
						</div>
						<div className='flex items-center justify-center space-x-5'>
							<CircularCard
								title='followers'
								num={3000}
								color='bg-transparent'
							/>
						</div>
					</section>

					<Separator />

					<Section
						title='TEDx Youth@BeniSuefSTEM Management Board'
						biggerMargin
					>
						<div className='relative'>
							<TeamSlider
								loop
								dots
								center
								name=''
								color='text-red-500'
								persons={[
									{
										name: 'Yussof Waleed',
										title: 'Chairman',
										image: '/teams/leaders/Chairman.png',
									},
									{
										name: 'Ahmed Sayed',
										title: 'Co-Chairman',
										image: '/teams/leaders/Co-Chairman.png',
									},
									{
										name: 'Salma Ahmed',
										title: 'CEO',
										image: '/teams/leaders/CEO.png',
									},
									{
										name: 'Salma Ahmed',
										title: 'Multi-Media Chief',
										image: '/teams/leaders/Multi-Media.png',
									},
									{
										name: 'Mohamed Hisham',
										title: 'Digital-Marketing Chief',
										image: '/teams/leaders/Digital-Marketing-Chief.png',
									},
									{
										name: 'Karem Nabil',
										title: 'PR & FR Chief',
										image: '/teams/leaders/PR-&-FR.png',
									},
								]}
							/>
						</div>
						<div className='flex items-center justify-center pt-4'>
							<button
								className='px-6 py-2 text-lg font-black text-white capitalize border-2 rounded-lg font-roboto border-ted dark:border-red-500 bg-ted dark:bg-red-500 dark:text-gray-800 md:rounded-full hover:bg-red-600'
								onClick={() => router.push('/team')}
							>
								rest of our team
							</button>
						</div>
					</Section>
				</div>
			</section>

			<Footer />
		</>
	);
}
