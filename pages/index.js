import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Separator from '../components/Separator';
import Slider from '../components/Slider';
import Word from '../components/Word';

export default function Home() {
	return (
		<>
			<Nav />
			{/* <section className='h-screen w-full bg-mainImage bg-no-repeat bg-cover bg-center flex justify-center items-center'>
				<div className='flex flex-col py-4 px-2 md:py-16 md:px-24 justify-center items-center backdrop rounded-2xl border-red-500 border-2 space-y-12'>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-roboto font-bold text-white'>
						HB Recruitment
					</h1>
					<div className='timer flex justify-center items-center'>
						<Timer />
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<Button text='about us' />
						<Button text='contact us' />
						<Button text='join us' span='col-span-2' />
					</div>
				</div>
			</section> */}

			<Slider
				images={[
					'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
					'/cover.jpg',
				]}
			/>
			<section className='flex justify-center items-center'>
				<div className='container py-12 space-y-10'>
					<div>
						<h2 className='text-4xl font-bold font-roboto pb-4'>About TEDx</h2>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-xl leading-relaxed h-full lg:w-3/4 border-l-8 rounded border-red-500 pl-4'>
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
								<img src='/aboutTed.png' />
							</div>
						</div>
					</div>
					<Separator color='bg-red-500' />
					<div>
						<h2 className='text-4xl font-bold font-roboto pb-4'>About Us</h2>
						<div className='flex lg:flex-row flex-col'>
							<p className='font-roboto text-xl leading-relaxed h-full lg:w-3/4 border-l-8 rounded border-red-500 pl-4'>
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
								<img src='/tedLogoCenter.png' />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
