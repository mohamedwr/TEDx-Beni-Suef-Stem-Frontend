import Head from 'next/head';

const Title = ({ children = '' }) => (
	<Head>
		<meta property='og:title' content='European Travel Destinations' />
		<meta property='og:description' content='TEDxYouth@BeniSuefSTEM Webpage' />
		<meta
			property='og:image'
			content='https://tedxbenisuef.vercel.app/logoWhite.png'
		/>
		<meta property='og:url' content='https://tedxbenisuef.vercel.app' />
		<meta name='twitter:title' content='TEDxYouth@BeniSuefSTEM Webpage' />
		<meta name='twitter:description' content='TEDxYouth@BeniSuefSTEM Webpage' />
		<meta
			name='twitter:image'
			content=' https://tedxbenisuef.vercel.app/logoWhite.png'
		/>
		<meta name='twitter:card' content='summary_large_image' />
		<meta
			name='description'
			content='TEDxYouth@BeniSuefSTEM aims to spot the
								light on the idea and the concept of overcoming the tough times
								and convert them into a huge success. In addition, spread and
								discuss the ideas of our local STEM community, which includes
								hundreds of students with bright minds. We plan to spread
								practical steps for success, to rise with our people, community,
								and our lovely country, Egypt.'
		/>
		<title>TEDx BeniSuefStem | {children}</title>
	</Head>
);
export default Title;
