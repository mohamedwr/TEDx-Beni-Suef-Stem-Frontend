import Head from 'next/head';

const Title = ({
	children = '',
	description = 'TEDxYouth@BeniSuefSTEM aims to spot the light on the idea and the concept of overcoming the tough times and convert them into a huge success. In addition, spread and discuss the ideas of our local STEM community, which includes hundreds of students with bright minds. We plan to spread practical steps for success, to rise with our people, community, and our lovely country, Egypt.',
	title = 'TEDx Youth@BeniSuefSTEM Website',
	image = 'https://tedxbenisuef.vercel.app/tedLogoWhite.png',
}) => (
	<Head>
		<meta property='og:title' content={title} />
		<meta property='og:description' content={description} />
		<meta name='keywords' content='TEDx, benisuef, stem, youth' />

		<meta property='og:image' content={image} />
		<meta property='og:url' content='https://tedxbenisuef.vercel.app' />
		<meta name='twitter:title' content={title} />
		<meta name='twitter:description' content={description} />
		<meta name='twitter:image' content={image} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='description' content={description} />
		<title>{children} | TEDx BeniSuefStem</title>
	</Head>
);
export default Title;
